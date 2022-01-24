/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import SantaService from "App/Services/SantaService";
import {schema} from "@ioc:Adonis/Core/Validator";
//https://medium.com/@shemsiu/ioc-container-and-dependency-injection-in-adonis-v5-216774c2a476
const santaService = new SantaService()

Route.post('/apply', async ({request, response}) => {

  const newPersonSchema = schema.create({
    name: schema.string({ trim: true }),
    surname: schema.string({ escape: true }),
    wishlist: schema.array().members(schema.string()),
  })

  let person
  try {
    person = await request.validate({ schema: newPersonSchema })
  }
  catch (error){
    response.badRequest(error.messages)
  }

  let id = await santaService.apply(person)
  return { id }
})

Route.post('/shuffle', async () => {
  await santaService.shuffle()
  return { rez: 'ave, Santas' }
})

Route.get('/client/:id', async ({ request }) => {
  const id = parseFloat(request.param('id'))
  return await santaService.getClient(id)
})
