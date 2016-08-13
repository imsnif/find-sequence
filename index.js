module.exports = ids

function ids (arr, lookfor) {
  return arr.reduce((pairs, elem, index, arr) => {
    if (elem === lookfor && (index === 0 || elem !== arr[index - 1])) {
      pairs.push({start: index, end: index})
    } else if (elem === lookfor && elem === arr[index - 1]) {
      pairs[pairs.length - 1].end = index
    }
    return pairs
  }, [])
}
