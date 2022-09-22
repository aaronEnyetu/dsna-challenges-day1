/* eslint-disable no-console */

const { ReverseArray } = require('../ReverseArray');


describe('Stack reverse array', () => {
  it('should reverse the input array, and return it', () => {
    const stackItem = new ReverseArray([12, 3, 5, 7]);
    // const reverse = stackItem.reverse([12, 3, 5, 7]);
    stackItem.classReverse();
    expect(stackItem.readableArr).toEqual([7, 5, 3, 12]);
  });
});
