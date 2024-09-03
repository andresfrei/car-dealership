import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.CarsService.findAll();
  }
  @Get(':id')
  getCardById(@Param('id', new ParseUUIDPipe({ version: '4' })) id) {
    const card = this.CarsService.findOne(id);
    if (!card) throw new NotFoundException(`Card with id ${id} not found`);
    return card;
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.CarsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id,
    @Body() body,
  ) {
    return { id, body };
  }
}
