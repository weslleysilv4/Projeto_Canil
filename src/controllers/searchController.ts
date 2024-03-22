import { type Request, type Response } from 'express'
import { Pets } from '../models/Pets'
import { createMenuObject } from '../helpers/createMenuObjects'

export const search = (req: Request, res: Response): void => {
  const query: string = req.query.q as string

  if (query === '') {
    res.redirect('/')
    return
  }

  const list = Pets.getFromName(query)

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query
  })
}
