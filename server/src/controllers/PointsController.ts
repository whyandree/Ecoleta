import { Request, Response, response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(req: Request, res: Response) {
    const { city, uf, items} = req.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.pointId')
      .whereIn('point_items.itemId', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    return res.json(points);
  }

  async show (req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex('points').where('id', id).first();

    if (!point) {
      return res.status(400).json({ messege: 'Point not found' });
    }

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.itemId')
      .where('point_items.pointId', id)
      .select('items.title');

    return res.json({ point, items });
  }

  async create (req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
     } = req.body;

     const trx = await knex.transaction();

     const point = {
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
     };

     const insertedIds = await trx('points').insert(point);

     const pointId = insertedIds[0];

     const pointItems = items.map((itemId: number) => {
      return {
        itemId,
        pointId,
      }
     })

     await trx('point_items').insert(pointItems);

     await trx.commit();

     return res.json({
      id: pointId,
      ...point,
      });
  }
}

export default PointsController;
