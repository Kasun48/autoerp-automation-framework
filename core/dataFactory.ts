import { faker } from '@faker-js/faker';

export class DataFactory {
  static createCustomer() {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number('##########'),
      address: faker.location.streetAddress()
    };
  }

  static createVehicle() {
    return {
      vin: faker.vehicle.vin(),
      model: faker.vehicle.model(),
      mileage: faker.number.int({ min: 1000, max: 200000 })
    };
  }

  static createBranch() {
    return {
      name: faker.company.name(),
      city: faker.location.city()
    };
  }
}
