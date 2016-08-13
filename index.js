module.exports = ids

function handlePotentialSequenceElement (lookfor, pairs, elem, index, arr) {
  if (typeof lookfor === 'function') {
    if ((index === 0 || !lookfor(elem, arr[index - 1])) && arr[index + 1] && lookfor(arr[index + 1], elem)) {
      pairs.push({start: index, end: index})
    } else if (lookfor(elem, arr[index - 1])) {
      pairs[pairs.length - 1].end = index
    }
  } else {
    if (elem === lookfor) {
      if (index === 0 || elem !== arr[index - 1]) {
        // start of a sequence
        pairs.push({start: index, end: index})
      } else {
        // middle or end of a sequence
        pairs[pairs.length - 1].end = index
      }
    }
  }
  return pairs
}

function ids (arr, lookfor) {
  if (!arr || !Array.isArray(arr)) throw new Error(`${arr} is not an array`)
  if (typeof lookfor === 'undefined') throw new Error('no element to search provided')
  return arr.reduce(handlePotentialSequenceElement.bind(undefined, lookfor), [])
}
