import { Scooter } from '../../../../entities/scooter.entity';
import { ScooterType } from '../../../../entities/scooter_type.entity';

export const scooterStub = (): Scooter => {
  return {
    license_plate: 'ABC-1234',
    mileage: 123,
    battery_level: 99,
    lat: 125.1234,
    lon: 25.1234,
    type_id: 1,
    is_reserved: false,
    is_disabled: false,
    created_at: new Date('2022/06/28 08:00:00'),
    updated_at: new Date('2022/06/28 08:00:00'),
    _vehicle_type: new ScooterType(),
  };
};

export const scooterArrayStub = (): Array<Scooter> => {
  return [
    {
      license_plate: 'ABC-1234',
      mileage: 123,
      battery_level: 99,
      lat: 125.1234,
      lon: 25.1234,
      type_id: 1,
      is_reserved: false,
      is_disabled: false,
      created_at: new Date('2022/06/28 08:00:00'),
      updated_at: new Date('2022/06/28 08:00:00'),
      _vehicle_type: new ScooterType(),
    },
    {
      license_plate: 'ABC-1234',
      mileage: 123,
      battery_level: 99,
      lat: 125.1234,
      lon: 25.1234,
      type_id: 1,
      is_reserved: true,
      is_disabled: true,
      created_at: new Date('2022/06/28 08:00:00'),
      updated_at: new Date('2022/06/28 08:00:00'),
      _vehicle_type: new ScooterType(),
    },
  ];
};
