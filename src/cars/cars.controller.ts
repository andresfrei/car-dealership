import { CarsService } from './cars.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.CarsService.findAll();
  }
  @Get(':id')
  getCardById(@Param('id') id) {
    return this.CarsService.findOne(+id);
  }
}
