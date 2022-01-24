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
//https://medium.com/@shemsiu/ioc-container-and-dependency-injection-in-adonis-v5-216774c2a476
const santaService = new SantaService()

Route.post('/apply', async ({request}) => {
  let person = request.body()
  console.log(person);

  await santaService.apply(person)
  return { hello: person.name }
})

Route.post('/shuffle', async () => {
  await santaService.shuffle()
  return { hello: 'ave, Santas' }
})

Route.get('/client/:id', async ({ request }) => {
  const id = parseFloat(request.param('id'))
  let rez =  await santaService.getClient(id)
  return rez
})

Route.get('/', async () => {
  return { hello: 'world' }
})
