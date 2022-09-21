const { Queue } = require('../Queue');

describe('Queue stuff', () => {
  it('enqueue should add an item to the back of the queue', () => {
    const newItemArr = new Queue([]);
    newItemArr.enqueue('fox');
    newItemArr.enqueue('goose');
    newItemArr.enqueue('lizard');
    expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
  });
    
  it('Dequeue should remove an item from the front', () => {
    const newItemArr = new Queue(['fox', 'goose', 'lizard']);
    newItemArr.dequeue();
    expect(newItemArr.readableArr).toEqual(['goose', 'lizard']);
  });
    
});
