const array = {
  insert(array = [], n = 1) {
    performance.mark('Array');
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    const measure = performance.measure('Array', 'Array');
    console.log(measure.name, measure.duration);
    performance.clearMarks();
    return array
  },
  find(array = [], element = 1) {
    performance.mark('Array');
    const result =  array.includes(element)
    const measure = performance.measure('Array', 'Array')
    console.log(measure.name, measure.duration);
    performance.clearMarks();
    return result
  },
  get(array = [], element = 1) {
    performance.mark('Array');
    const result =  array.find(e => e === element)
    const measure = performance.measure('Array', 'Array')
    console.log(measure.name, measure.duration);
    performance.clearMarks();
    return result

  },
  delete(array = [], element = 1) {
    performance.mark('Array');
    array.splice(array.indexOf(element), 1);
    const measure = performance.measure('Array', 'Array')
    console.log(measure.name, measure.duration);
    performance.clearMarks();
    return array
  }
}
const set = {
  insert(set = new Set(), n = 1) {
    performance.mark('Set');
    for (let i = 0; i < n; i++) {
      set.add(i);
    }
    const measure = performance.measure('Set', 'Set')
    console.log(measure.name, measure.duration);
    performance.clearMarks();
    return set
  }, find (set = new Set(), element = 1) {
    performance.mark('Set');
    const result = set.has(element)
    const measure = performance.measure('Set', 'Set')
    console.log(measure.name, measure.duration);
    performance.clearMarks();
    return result
  },
  get(set = new Set(), element = 1) {
    performance.mark('Set');
    for (const item of set) {
      if (item === element) {
    const measure = performance.measure('Set', 'Set')
    console.log(measure.name, measure.duration);
    performance.clearMarks();
        return item
      }
    }
  },
  delete(set = new Set(), element = 1) {
    performance.mark('Set');
    set.delete(element);
    const measure = performance.measure('Set', 'Set')
    console.log(measure.name, measure.duration);
    performance.clearMarks();
    return set
  }
}

function arrayVsSet(n) {
  console.log(`${n} elements\n`)
  const myArray = [];
  const mySet = new Set();

  console.log('Insert\n')

  array.insert(myArray, n);
  set.insert(mySet, n);
  console.log()

  console.log('Find middle\n')

  array.find(myArray, Math.floor(n / 2));
  set.find(mySet, Math.floor(n / 2));
  console.log()

  console.log('Get element middle\n')

  array.get(myArray, Math.floor(n / 2));
  set.get(mySet, Math.floor(n / 2));
  console.log()

  console.log('Delete middle\n')

  array.delete(myArray, Math.floor(n / 2));
  set.delete(mySet, Math.floor(n / 2));
  console.log()
}

arrayVsSet(10000)
arrayVsSet(100000)
arrayVsSet(1000000)
arrayVsSet(10000000)
