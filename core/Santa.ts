import { Exception } from "@poppinss/utils";

const minPlayers = 3;
const maxPlayers = 500;

export class Santa { //Santa Domain
  public players

  public onboard() {
    if (this.players < maxPlayers) {

    }

  }

  public match() {
    if (this.players < minPlayers || this.players > maxPlayers) {
    throw new Exception("illegal Santas quanity")
    }
  }

  public getPartner() {
  }
}
