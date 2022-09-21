const { Queue } = require('../Queue');

describe('Queue stuff', () => {
  it('enqueue should add an item to the back of the queue', () => {
    const newItemArr = new Queue([]);
    newItemArr.enqueue('fox');
    newItemArr.enqueue('goose');
    newItemArr.enqueue('lizard');
    expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
  });
    
});
