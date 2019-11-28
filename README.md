#Flatten

A very simple generator to flatten an array of any depth.

## How to use

```javascript

const flatten = require('flatten');

const array = [1, [2, [3]], [4]];

const flattened = [...flatten(array)];

// flattened: [1, 2, 3, 4]

```
