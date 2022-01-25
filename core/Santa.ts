export default class Santa { //Santa Domain

  public shuffle(personsIds):[] {
    const n = personsIds.length
    let links: any = []

    for (let i = 0, j; i < n; i++) {
      do {
        j = Math.floor(Math.random() * n)
      }
      while (personsIds[i] === personsIds[j])
      links.push([personsIds[i] , personsIds[j]])
    }
    return links
  }
}
