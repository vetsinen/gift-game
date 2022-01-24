export default class SantaService {
  public apply (person): void {
    console.log(`Hi ${person.name}`)
  }
  public shuffle (): void {
    console.log('lets shuffle it')
  }
  public getClient(id: number){
    console.log(`let's find client for ${id}`)
  }
}
