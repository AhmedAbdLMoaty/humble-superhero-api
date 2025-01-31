import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './interfaces/hero.interface';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new hero', () => {
      const createHeroDto: CreateHeroDto = {
        name: 'Batman',
        superpower: 'Detective skills',
        humilityScore: 7,
      };

      const result: Hero = {
        name: 'Batman',
        superpower: 'Detective skills',
        humilityScore: 7,
      };

      jest.spyOn(service, 'create').mockImplementation(() => result);

      expect(controller.create(createHeroDto)).toEqual(result);
    });
  });

  describe('findAllSorted', () => {
    it('should return an array of heroes sorted by humility score', () => {
      const result: Hero[] = [
        { name: 'Wonder Woman', superpower: 'Strength', humilityScore: 9 },
        { name: 'Superman', superpower: 'Flight', humilityScore: 8 },
      ];

      jest.spyOn(service, 'findAllSorted').mockImplementation(() => result);

      expect(controller.findAllSorted()).toEqual(result);
    });
  });
});
