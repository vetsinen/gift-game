import Person from "App/Models/Person";
import Link from "App/Models/Link";

import Santa from "../../core/Santa";
import {Exception} from "@poppinss/utils";
const santa = new Santa()

export default class SantaService {
  public async  apply (person) {
    let p = new Person()
    p.name = person.name
    p.surname = person.surname
    p.wishlist = JSON.stringify(person.wishlist)
    await p.save()
    console.log(`Hi ${person.name}`)
  }

  public async shuffle () {
    console.log('lets shuffle it')
    if (await Link.first()){
      throw new Exception('Game already started')
    }
    const persons = await Person.all()
    let ids = persons.map(el=>el['$attributes'].id)

    const links = santa.shuffle(ids)
    console.log(links)
    for (let link of links){
      let record = new Link()
      record.patron = link[0]
      record.client = link[1]
      record.save()
    }
  }

  public async getClient(id: number){
    // console.log(`let's find client for ${id}`)
    const link = await Link.findBy('patron',id)
    if (link){
      let client = await Person.findBy('id', link['$attributes'].client)
      if (client) {
        let rez = (client['$attributes'])
        rez =  {name: rez.name, surname: rez.surname, wishlist: rez.wishlist}
        console.log(rez)
        return rez
      }
    }
    else {
      throw new Exception('cannot find your client')
    }

  }
}
