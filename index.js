module.exports = ids

function funcCompare (lookfor, pairs, elem, index, arr) {
  if (
    (index === 0 || !lookfor(elem, arr[index - 1])) && // beginning of array or potential sequence
    arr[index + 1] && // there exists a next element in the array
    lookfor(arr[index + 1], elem) // next element continues the sequence
  ) {
    pairs.push({start: index, end: index})
  } else if (lookfor(elem, arr[index - 1])) {
    pairs[pairs.length - 1].end = index
  }
  return pairs
}

function elemCompare (lookfor, pairs, elem, index, arr) {
  if (elem === lookfor) {
    if (index === 0 || elem !== arr[index - 1]) {
      // start of a sequence
      pairs.push({start: index, end: index})
    } else {
      // middle or end of a sequence
      pairs[pairs.length - 1].end = index
    }
  }
  return pairs
}

function ids (arr, lookfor) {
  if (!arr || !Array.isArray(arr)) throw new Error(`${arr} is not an array`)
  if (typeof lookfor === 'undefined') throw new Error('no element to search provided')
  if (typeof lookfor === 'function') {
    return arr.reduce(funcCompare.bind(undefined, lookfor), [])
  } else {
    return arr.reduce(elemCompare.bind(undefined, lookfor), [])
  }
}
