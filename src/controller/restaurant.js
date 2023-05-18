import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default ({ config, db }) => {
  let api = Router();

  // '/v1/restaurant/add'
  api.post('/add', async (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    await newRest.save();
    res.status(201).json({ message: 'Restaurant saved successfully' });
  });

  return api;
};
