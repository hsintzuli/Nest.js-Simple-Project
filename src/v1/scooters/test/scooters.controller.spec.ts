import { Test, TestingModule } from '@nestjs/testing';
import { Scooter } from '../../../entities/scooter.entity';
import { QueryScooterDto } from '../dto/query-scooter.dto';
import { ScootersController } from '../scooters.controller';
import { ScootersService } from '../scooters.service';
import { scooterArrayStub, scooterStub } from './stubs/sooters.stubs';

jest.mock('../scooters.service');

describe('ScootersController', () => {
  let controller: ScootersController;
  let service: ScootersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScootersController],
      providers: [ScootersService],
    }).compile();

    controller = module.get<ScootersController>(ScootersController);
    service = module.get<ScootersService>(ScootersService);
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    describe('when find one is called', () => {
      let scooter: Scooter;

      beforeEach(async () => {
        scooter = await controller.findOne(scooterStub().license_plate);
      });

      test('then it should call ScooterService', () => {
        expect(service.findOne).toBeCalledWith(scooterStub().license_plate);
      });

      test('then it should return a scooter', () => {
        expect(scooter).toEqual(scooterStub());
      });
    });
  });

  describe('findAll', () => {
    describe('when find all is called with no argument', () => {
      let scooters: Scooter[];

      beforeEach(async () => {
        scooters = await controller.findAll();
      });

      test('then it should call ScooterService', () => {
        expect(service.findAll).toBeCalled();
      });

      test('then it should return an array of scooters', () => {
        expect(scooters).toEqual(scooterArrayStub());
      });
    });

    describe('when find all is called with condition', () => {
      let scooters: Scooter[];
      const condition: QueryScooterDto = { avaliable: true };

      beforeEach(async () => {
        scooters = await controller.findAll(condition);
      });

      test('then it should call findAvaliableScooters of ScooterService', () => {
        expect(service.findAvaliableScooters).toBeCalled();
      });

      test('then it should return an array of scooters that match the condition', () => {
        expect(scooters).toEqual(
          scooterArrayStub().filter((item) => {
            item.is_disabled === !condition && item.is_reserved === !condition;
          }),
        );
      });
    });
  });
});
