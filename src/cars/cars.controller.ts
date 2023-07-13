import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarI } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  AllCars() {
    return this.carsService.getAll();
  }

  @Get(':id')
  byId(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.getById(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto): CarI {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carsService.update(updateCarDto, id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
