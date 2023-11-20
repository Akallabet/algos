function insertArray(array = [], n = 1) {
  performance.mark('Array');
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  console.log(performance.measure(`Insert ${n} elements in an array`, 'Array'));
  performance.clearMarks();
  return array
}

function insertSet(set = new Set(), n = 1) {
  performance.mark('Set');
  for (let i = 0; i < n; i++) {
    set.add(i);
  }
  console.log(performance.measure(`Insert ${n} elements in a set`, 'Set'));
  performance.clearMarks();
  return set
}

function arrayVsSet (n) {
  const array = [];
  insertArray(array, n);

  const set = new Set();
  insertSet(set, n);
}

arrayVsSet(10000)
arrayVsSet(100000)
arrayVsSet(1000000)
arrayVsSet(10000000)
// performancesInsert(100000000)
