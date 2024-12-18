import express from 'express'
import {
  createUser,
  getUserById,
  getUsers,
} from '../controllers/usersController'

// eslint-disable-next-line new-cap
const apiRouter = express.Router()

apiRouter.get('/', (_, res) => {
  res.send('Hello from Express!')
})

apiRouter.get('/getUsers', getUsers)
apiRouter.get('/getUser/:id', getUserById)
apiRouter.post('/createUser', createUser)

export default apiRouter
