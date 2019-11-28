const flatten = require('./flatten');

describe('#flatten', () => {

  it('should threat well empty arrays', () => {
    const result = [...flatten([])];

    expect(result).toEqual([]);
  });

  it('should treat well also nested empty arrays', () => {
    const result = [...flatten([[], [[]], [[], [[[]]]]])];
    expect(result).toEqual([]);
  });

  it('should return the same array if it is not nested', () => {
    expect([...flatten([0])]).toEqual([0]);
    expect([...flatten([0, 1])]).toEqual([0, 1]);
    expect([...flatten([0, 1, 2])]).toEqual([0, 1, 2]);
  });

  it('should flatten a nested array', () => {
    expect([...flatten([0, [[1, 2]], 3, 4])]).toEqual([0, 1, 2, 3, 4]);
    expect([...flatten([0, [1, 2], [3, 4]])]).toEqual([0, 1, 2, 3, 4]);
    expect([...flatten([0, [1, 2, [[[2, 3]]]], [3, 4]])]).toEqual([0, 1, 2,2, 3, 3, 4]);
  });
});
