import colors from 'colors'
import { RequestHandler } from 'express'

export const logMiddleware: RequestHandler = (_req, _res, next) => {
  console.log(colors.red(new Date().toISOString()))
  next()
}
