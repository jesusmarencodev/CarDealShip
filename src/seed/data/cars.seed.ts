/* eslint-disable prettier/prettier */
import { CarI } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: CarI[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'txl',
  },
  {
    id: uuid(),
    brand: 'Susuki',
    model: 'm-50',
  },
  {
    id: uuid(),
    brand: 'VMW',
    model: 'k20',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'cherokee',
  },
];
