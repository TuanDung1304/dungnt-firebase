import { Request, Response } from 'express'

export async function getUsers(_req: Request, res: Response): Promise<void> {
  res.status(200).json([
    {
      id: 1,
      name: 'My name',
      age: 23,
    },
  ])
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const body = req.body
  const query = req.query
  const params = req.params

  console.log({ body, query, params })

  res.status(200).json({
    id: 1,
    name: 'My name',
    age: 23,
  })
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const body = req.body

  res.status(200).json({
    success: true,
    user: body,
  })
}
