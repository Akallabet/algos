function insertArray(array = [], n = 1) {
  performance.mark('Array');
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  const measure = performance.measure(`Array - insert`, 'Array');
  console.log(measure.name, measure.duration);
  performance.clearMarks();
  return array
}

function deleteFromArray(array = [], element = 1) {
  performance.mark('Array');
  array.splice(array.indexOf(element), 1);
  const measure = performance.measure('Array - delete', 'Array')
  console.log(measure.name, measure.duration);
  performance.clearMarks();
  return array
}

function insertSet(set = new Set(), n = 1) {
  performance.mark('Set');
  for (let i = 0; i < n; i++) {
    set.add(i);
  }
  const measure= performance.measure('Set - insert', 'Set')
  console.log( measure.name,measure.duration);
  performance.clearMarks();
  return set
}

function deleteFromSet(set = new Set(), element = 1) {
  performance.mark('Set');
  set.delete(element);
  const measure = performance.measure('Set - delete', 'Set')
  console.log(measure.name, measure.duration);
  performance.clearMarks();
  return set
}

function arrayVsSet (n) {
  console.log(`${n} elements`)
  const array = [];
  const set = new Set();

  insertArray(array, n);
  insertSet(set, n);

  deleteFromArray(array, Math.floor(n / 2));
  deleteFromSet(set, Math.floor(n / 2));
}

arrayVsSet(10000)
arrayVsSet(100000)
arrayVsSet(1000000)
arrayVsSet(10000000)
// performancesInsert(100000000)
