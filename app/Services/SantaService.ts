import Person from "App/Models/Person";
import Link from "App/Models/Link";

import Santa from "../../core/Santa";
import {Exception} from "@poppinss/utils";

const santa = new Santa()
const MINPLAYERS = 3
const MAXPLAYERS = 80

export default class SantaService {
  public async apply(person) {
    const count = (await Person.all()).length
    if (count >= MAXPLAYERS) {
      throw new Exception('Too many Santas')
    }

    let p = new Person()
    p.name = person.name
    p.surname = person.surname
    p.wishlist = JSON.stringify(person.wishlist)
    let rez = await p.save()
    return (rez['$attributes'].id)
  }

  public async shuffle() {
    if (await Link.first()) {
      throw new Exception('Game already started')
    }

    const count = (await Person.all()).length
    if (count<MINPLAYERS || count >= MAXPLAYERS) {
      throw new Exception('illegal Santas quantity')
    }

    const persons = await Person.all()
    let ids = persons.map(el => el['$attributes'].id)

    const links = santa.shuffle(ids)
    for (let link of links) {
      let record = new Link()
      record.patron = link[0]
      record.client = link[1]
      record.save()
    }
  }

  public async getClient(id: number) {
    const link = await Link.findBy('patron', id)
    if (link) {
      let client = await Person.findBy('id', link['$attributes'].client)
      if (client) {
        let rez = (client['$attributes'])
        rez = {name: rez.name, surname: rez.surname, wishlist: rez.wishlist}
        return rez
      }
    } else {
      throw new Exception('cannot find your client')
    }
  }
}
