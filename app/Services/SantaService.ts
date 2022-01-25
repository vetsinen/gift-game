import Person from "App/Models/Person";
import Link from "App/Models/Link";

import Santa from "../../core/Santa";
import {Exception} from "@poppinss/utils";

const santa = new Santa()
const MINPLAYERS = 3
const MAXPLAYERS = 80

export default class SantaService {
  public async apply(person) {
    const count: number = (await Person.all()).length
    if (count >= MAXPLAYERS) {
      throw new Exception('Est modus in rebus. Too many Santas')
    }

    let p: Person = new Person()
    p.name = person.name
    p.surname = person.surname
    p.wishlist = JSON.stringify(person.wishlist)
    let rez: Person = await p.save()
    return (rez['$attributes'].id)
  }

  public async shuffle():Promise<void> {
    if (await Link.first()) {
      throw new Exception('Littĕra scripta manet. Game already started')
    }

    const count: number = (await Person.all()).length
    if (count<MINPLAYERS || count >= MAXPLAYERS) {
      throw new Exception('Est modus in rebus, illegal Santas quantity')
    }

    const persons: Person[] = await Person.all()
    let ids: number[] = persons.map(el => el['$attributes'].id)

    const links: Link[] = santa.shuffle(ids)
    for (let link of links) {
      let record: Link = new Link()
      record.patron = link[0]
      record.client = link[1]
      record.save()
    }
  }

  public async getClient(id: number):Promise<object|undefined> {
    const link: Link|null = await Link.findBy('patron', id)
    if (link) {
      let client = await Person.findBy('id', link['$attributes'].client)
      if (client) {
        let rez = (client['$attributes'])
        rez = {name: rez.name, surname: rez.surname, wishlist: rez.wishlist}
        return rez
      }
    } else {
      throw new Exception('Felix, qui nihil debet, cannot find your client')
    }
  }
}
