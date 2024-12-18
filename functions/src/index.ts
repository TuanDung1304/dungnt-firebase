import { onRequest } from 'firebase-functions/v2/https'
import apiHandler from './handlers/apiHandler'

export const api = onRequest(apiHandler)
