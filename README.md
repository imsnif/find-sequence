# find-sequence

Find all sequences of elements in an array

### Usage
```javascript
    const findSeq = require('find-sequence')
    const zeroSequences = findSeq([0, 1, 0, 1, 0, 0, 0, 3, 4, 0, 0], 0)
    console.log(zeroSequences)
    // [ {start: 0, end: 0}, {start: 2, end: 2}, {start: 4, end: 6}, {start:9, end: 10} ]

    // function as iterator
    const iterator = (a, b) => {
      return b === a - 1
    }
    const sequences = findSeq([1, 2, 3, 4, 0, 7, 8, 9, 0], iterator)
    console.log(sequences) // [ {start: 0, end: 3}, {start: 5, end: 7} ]
```
## Contributions / Issues
Please feel free to open an issue or a PR if something's broken, or if you'd like some specific features added.

## License
MIT

