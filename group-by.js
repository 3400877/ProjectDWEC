const products = [
  { name: 'apples', category: 'fruits' },
  { name: 'oranges', category: 'fruits' },
  { name: 'potatoes', category: 'vegetables' }
];

const groupBy = (array) =>
  array.reduce((x, y) => {
    (x[y.day] = x[y.day] || []).push(y);
    return x;
  }, {});

export { groupBy };