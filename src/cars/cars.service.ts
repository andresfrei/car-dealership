import { CreateCarDto } from './dto/create-car.dto';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Mustang',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    return this.cars.find((car) => car.id === id);
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }
}
