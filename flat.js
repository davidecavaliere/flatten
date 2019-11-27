function* flatten([head, ...tail]) {

  if (Array.isArray(head)) {
    yield *flatten(head);
  } else {
    yield head;
  }

  if (tail.length > 0) {
    yield *flatten(tail);
  }

}

var arr = [[1, 2], 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr)];
console.log('flattened', flattened);
