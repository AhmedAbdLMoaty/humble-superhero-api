import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class SuperheroesService {
  private heroes: Hero[] = [];

  create(createHeroDto: CreateHeroDto): Hero {
    const newHero: Hero = {
      ...createHeroDto,
    };
    this.heroes.push(newHero);
    return newHero;
  }

  findAllSorted(): Hero[] {
    return this.heroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
