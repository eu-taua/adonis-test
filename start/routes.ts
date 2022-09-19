import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/users', async () => {
  return await Database.from('users').select('*')
})

Route.post('/users', async ({ request, response }) => {
  const user = new User()
  user.username = request.input('username')
  user.email = request.input('email')
  user.password = request.input('password')
  user.avatarUrl = request.input('avatarUrl')
  await user.save()

  return response.status(201).json(user.$isPersisted)
})
Route.put('/users', async () => {
  return {}
})
Route.delete('/users', async () => {
  return {}
})
