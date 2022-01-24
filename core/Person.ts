import {Exception} from "@poppinss/utils";

export default class Person {

  constructor(id: Number, name: String, surname: String, wishlist: String[], ) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.wishlist = wishlist;
  }

  validate(name: String, surname: String, wishlist: String[]){
    if (!name || !surname ){
      throw new Exception('not specified person')
    }

    let flag = false
    for (let wish of wishlist)
      if (wish){flag=true; break}
    if (!flag){throw new Exception('you need specify at least one wish')}
  }

  public id: Number
  public name: String
  public surname: String
  public wishlist: String[]
}
