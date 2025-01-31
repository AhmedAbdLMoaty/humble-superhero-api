import { Controller, Post, Body, Get } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './interfaces/hero.interface';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createHeroDto: CreateHeroDto): Hero {
    return this.superheroesService.create(createHeroDto);
  }

  @Get()
  findAllSorted(): Hero[] {
    return this.superheroesService.findAllSorted();
  }
}
