import {Exception} from "@poppinss/utils";

const minPlayers = 3;
const maxPlayers = 500;

export default class Santa { //Santa Domain
  public players

  public apply() {
    if (this.players < maxPlayers) {

    }

  }

  public shuffle(personsIds) {
    if (personsIds.length < minPlayers || personsIds.length > maxPlayers) {
      throw new Exception("illegal Santas quanity")
    }
    const n = personsIds.length
    let links: any = []

    for (let i = 0, j; i < n; i++) {
      do {
        j = Math.floor(Math.random() * n)
      }
      while (personsIds[i] === personsIds[j])
      links.push([personsIds[i] , personsIds[j]])
      //console.log(personsIds[i], personsIds[j])
    }
    return links
  }

  // public getPartner(id: number) {
  // }
}
