import {Exception} from "@poppinss/utils";
import Person from "./Person";

const minPlayers = 3;
const maxPlayers = 500;

export default class Santa { //Santa Domain
  public players

  public apply() {
    if (this.players < maxPlayers) {

    }

  }

  public shuffle(persons: Person[]): boolean {
    if (persons.length < minPlayers || persons.length > maxPlayers) {
      throw new Exception("illegal Santas quanity")
    }

    let personsIds = persons.map(el => el.id)
    const n = personsIds.length
    let links: any = []

    for (let i = 0, j; i < persons.length; i++) {
      do {
        j = Math.floor(Math.random() * n)
      }
      while (personsIds[i] === personsIds[j])
      links.push([personsIds[i] , personsIds[j]])
      //console.log(personsIds[i], personsIds[j])
    }
    console.log(links)
    return true
  }

  // public getPartner(id: number) {
  // }
}
