import { countdown, dateDifference } from '../utils/utils';

describe('countdown', () => {
  test('when passed a object, it will return an string', () => {
    expect(typeof countdown({})).toBe('string');
  });

  test('when passed an empty object, it will return an "Archived" string', () => {
    expect(countdown({})).toBe('Archived');
  });

  test('when passed an object containing 172,800 seconds, it will return a string of "2 Days until"', () => {
    expect(countdown({ seconds: 172800 })).toBe('2 days until');
  });

  test('when passed an object containing 86,400 seconds, it will return a string of "1 Day until"', () => {
    expect(countdown({ seconds: 86400 })).toBe('1 day until');
  });

  test('when passed an object containing 43,200 seconds, it will return a string of "12 hours until"', () => {
    expect(countdown({ seconds: 43200 })).toBe('12 hours until');
  });

  test('when passed an object containing 3,600 seconds, it will return a string of "1 hour until"', () => {
    expect(countdown({ seconds: 3600 })).toBe('1 hour until');
  });

  test('when passed an object containing 4320100 seconds, it will return a string of "50 days until"', () => {
    expect(countdown({ seconds: 4320100 })).toBe('50 days until');
  });

  test('when passed an object containing less than 3600 seconds, it will return a string of "Don\'t forget your toothbrush!"', () => {
    expect(countdown({ seconds: 3460 })).toBe("Don't forget your toothbrush!");
  });

  test('when passed an object containing negative seconds where the seconds number is smaller than the tripsDurationSeconds, it will return an "Ongoing - don\'t forget your postcard" string', () => {
    expect(countdown({ seconds: -3460, tripDurationSeconds: 4000 })).toBe(
      "Ongoing - don't forget your postcard",
    );
  });

  test('when passed an object containing negative seconds where the seconds number is larger than the tripsDurationSeconds, it will return an "Archived" string', () => {
    expect(countdown({ seconds: -3460, tripDurationSeconds: 2000 })).toBe(
      'Archived',
    );
  });
});

describe('dateDifference', () => {
  test('when passed nothing would return an object', () => {
    expect(dateDifference()).toEqual({ seconds: 0, tripDurationSeconds: 0 });
  });

  test('when given the current date and a trip date that is in the future (compared to current), returns an object with time difference in seconds', () => {
    const current = 1623332876;
    const futureTrip = 1624655521;
    const endTime = 1624655521;
    const expected = futureTrip - current;
    expect(dateDifference(current, futureTrip, endTime)).toEqual({
      seconds: expected,
      tripDurationSeconds: 0,
    });
  });

  test('when given the current date and a trip date that has passed (compared to current), returns an object with time difference in seconds', () => {
    const current = 1623332876;
    const pastTrip = 1576555216;
    const endTime = 1576555216;
    const expected = pastTrip - current;
    expect(dateDifference(current, pastTrip, endTime)).toEqual({
      seconds: expected,
      tripDurationSeconds: 0,
    });
  });

  test('when given the end date and start date of a trip (in seconds) it will return a object value pair with the time difference in seconds', () => {
    const current = 1111111111;
    const startSeconds = 1623332876;
    const endSeconds = 1576555216;
    const expectedOtherTimeDiff = startSeconds - current;
    const expectedTimeDifference = endSeconds - startSeconds;
    expect(dateDifference(current, startSeconds, endSeconds)).toEqual({
      seconds: expectedOtherTimeDiff,
      tripDurationSeconds: expectedTimeDifference,
    });
  });
});
