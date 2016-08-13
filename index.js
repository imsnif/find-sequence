module.exports = ids

function ids (arr, lookfor) {
  if (!arr || !Array.isArray(arr)) throw new Error(`${arr} is not an array`)
  if (lookfor !== 0 && !lookfor) throw new Error('no element to search provided')
  return arr.reduce((pairs, elem, index, arr) => {
    if (elem === lookfor && (index === 0 || elem !== arr[index - 1])) {
      pairs.push({start: index, end: index})
    } else if (elem === lookfor && elem === arr[index - 1]) {
      pairs[pairs.length - 1].end = index
    }
    return pairs
  }, [])
}
