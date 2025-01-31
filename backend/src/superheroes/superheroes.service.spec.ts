import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';

interface Hero {
  name: string;
  superpower: string;
  humilityScore: number;
}

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should create and return a hero', () => {
    const newHero: Hero = {
      name: 'TestHero',
      superpower: 'Testing',
      humilityScore: 8,
    };

    const createdHero = service.create(newHero);
    expect(createdHero).toEqual(newHero);
    expect(service.findAllSorted()).toContainEqual(newHero);
  });

  it('should return heroes sorted by humility score descending', () => {
    const heroes: Hero[] = [
      { name: 'Hero1', superpower: 'Power1', humilityScore: 5 },
      { name: 'Hero2', superpower: 'Power2', humilityScore: 9 },
      { name: 'Hero3', superpower: 'Power3', humilityScore: 3 },
    ];

    heroes.forEach((hero) => service.create(hero));

    const sortedHeroes = service.findAllSorted();
    expect(sortedHeroes).toEqual([
      heroes[1], // HumilityScore: 9
      heroes[0], // HumilityScore: 5
      heroes[2], // HumilityScore: 3
    ]);
  });
});
