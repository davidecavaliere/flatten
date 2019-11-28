/**
 * Flattens a give array
 */
module.exports = function* flatten([head, ...tail]) {

  if (head !== undefined) {

    if (Array.isArray(head)) {
      yield *flatten(head);
    } else {
      yield head;
    }

  }

  if (tail.length > 0) {
    yield *flatten(tail);
  }

};
