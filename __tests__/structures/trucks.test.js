import Trucks from "../src/trucks";

let day;

beforeEach(() => {
  day = new Trucks();
});

test('ARRIVAL OF TRUCKS AND CHECK TRUCKS WAITING', () => {
  day.arrival('Renault');
  day.arrival('Volvo');
  expect(day.listOfTrucks()).toBe(' | Renault | Volvo');
  expect(day.checkTrucksWaiting()).toBe(2);
  day.departure();
  expect(day.checkTrucksWaiting()).toBe(1);
});

test('NUMBER OF SHIPMENTS OF THE DAY REACHED', () => {
  day.arrival('Renault');
  day.arrival('Volvo');
  day.arrival('Scania');
  day.arrival('Mercedes');
  day.arrival('Volkswagen');
  expect(day.numberOfShipmentRealized()).toBe(0);
  day.departure();
  expect(day.numberOfShipmentRealized()).toBe(1);
});