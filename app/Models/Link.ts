import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Link extends BaseModel {
  public static table = 'links'
  @column({ isPrimary: true })
  public id: number

  @column()
  public patron: number

  @column()
  public client: number
}
