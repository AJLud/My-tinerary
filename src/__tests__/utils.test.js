import countdown from '../utils/utils';

describe('countdown', () => {
  test('when passed a object, it will return an string', () => {
    expect(typeof countdown({})).toBe('string');
  });

  test('when passed an empty object, it will return an empty string', () => {
    expect(countdown({})).toBe('');
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
});
