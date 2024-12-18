import cors from 'cors'
import express from 'express'
import apiRouter from '../routers/apiRouter'
import { logMiddleware } from '../middlewares/logMiddleware'

const apiHandler = express()

apiHandler.use('/api', logMiddleware, apiRouter)
apiHandler.use(cors())

export default apiHandler
