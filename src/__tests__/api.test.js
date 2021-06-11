import getTrips from '../api/api';

describe('GET trips', () => {
  test('should return an object containg an array', () => {
    const actual = getTrips();

    expect(Array.isArray(actual.trips)).toBe(true);
  });

  // test('returned array should contain objects with correct keys', () => {
  //   const actual = getTrips();
  //   const trips = actual.trips;
  //   trips.forEach((trip) => {
  //     expect(trip).toEqual(
  //       expect.objectContaining({
  //         destination: expect.any(String),
  //         end_date: expect.any(String),
  //         start_date: expect.any(String),

  //         owner: expect.any(String),
  //         trip_name: expect.any(String),
  //       })
  //     );
  //   });
  //   expect(trips).toBeInstanceOf(Array);
  // });
});
