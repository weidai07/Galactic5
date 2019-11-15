import { Earth, Mercury, Venus, Mars, Jupiter } from './scripts';

describe('Earth', () => {

  test('age of Earth humans', () => {
    let newAge = new Earth("30");
    expect(newAge.age).toEqual("30");
  });
});
