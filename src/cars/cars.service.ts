import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CarI } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: CarI[] = [];

  getAll() {
    return this.cars;
  }

  getById(id: string) {
    const car = this.cars.find((card) => card.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto): CarI {
    const newCar: CarI = { ...createCarDto, id: uuid() };
    this.cars.push(newCar);
    return newCar;
  }

  update(updateCarDto: UpdateCarDto, id: string) {
    let carDB = this.getById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.getById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return;
  }

  fillCarsWithSeedData(cars: CarI[]) {
    this.cars = cars;
  }
}
