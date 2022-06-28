import { scooterStub, scooterArrayStub } from '../test/stubs/sooters.stubs';

export const ScootersService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockReturnValue(scooterStub()),
  findAll: jest.fn().mockReturnValue(scooterArrayStub()),
  findAvaliableScooters: jest.fn().mockImplementation((condition) => {
    return scooterArrayStub().filter((item) => {
      item.is_reserved === !condition && item.is_disabled === !condition;
    });
  }),
  create: jest.fn().mockReturnValue(scooterStub()),
  update: jest.fn().mockReturnValue(scooterStub()),
  remove: jest.fn().mockReturnValue(scooterStub()),
});
