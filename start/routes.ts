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
import SantaService from "App/Services/Santa";

Route.post('/apply', async ({request}) => {
  let person = request.body()
  console.log(person);
  (new SantaService()).apply(person)
  return { hello: person.name }
})

Route.post('/shuffle', async () => {
  return { hello: 'ave, Santas' }
})

Route.get('/client/:id', async ({ request }) => {
  console.log(request.param('id'))
  return { client: 'Martialis' }
})

Route.get('/', async () => {
  return { hello: 'world' }
})
