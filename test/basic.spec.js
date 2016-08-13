'use strict'

const test = require('tape')

test('basic case', t => {
  t.plan(2)
  try {
    const findSeq = require('../')
    const sequences = findSeq([0, 0, 0, 1], 0)
    t.equals(sequences.length, 1, 'One sequence returned')
    t.deepEquals(sequences[0], {start: 0, end: 2}, 'Proper start and end positions reported')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})

test('bad params', t => {
  t.plan(3)
  try {
    const findSeq = require('../')
    t.throws(
      () => findSeq(),
      Error,
      'Cannot call with no params'
    )
    t.throws(
      () => findSeq('a', 1),
      Error,
      'Cannot call with non-array'
    )
    t.throws(
      () => findSeq([0, 0, 0, 1]),
      Error,
      'Cannot call with no lookfor element'
    )
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})

test('no elements found', t => {
  t.plan(1)
  try {
    const findSeq = require('../')
    const sequences = findSeq([1, 1, 1, 1], 0)
    t.equals(sequences.length, 0, 'No sequences returned')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})

test('multiple sequences', t => {
  t.plan(5)
  try {
    const findSeq = require('../')
    const sequences = findSeq([0, 1, 0, 1, 0, 0, 0, 3, 4, 0, 0], 0)
    t.equals(sequences.length, 4, 'Four sequences returned')
    t.deepEquals(sequences[0], {start: 0, end: 0}, 'Proper start and end positions reported for first sequence')
    t.deepEquals(sequences[1], {start: 2, end: 2}, 'Proper start and end positions reported for first sequence')
    t.deepEquals(sequences[2], {start: 4, end: 6}, 'Proper start and end positions reported for first sequence')
    t.deepEquals(sequences[3], {start: 9, end: 10}, 'Proper start and end positions reported for first sequence')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})

test('entire array is lookfor element', t => {
  t.plan(2)
  try {
    const findSeq = require('../')
    const sequences = findSeq([0, 0, 0, 0], 0)
    t.equals(sequences.length, 1, 'One sequence returned')
    t.deepEquals(sequences[0], {start: 0, end: 3}, 'Proper start and end positions reported')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})

test('lookfor as function', t => {
  t.plan(3)
  try {
    const findSeq = require('../')
    const iterator = (a, b) => {
      return b === a - 1
    }
    const sequences = findSeq([1, 2, 3, 4, 0, 7, 8, 9, 0], iterator)
    t.equals(sequences.length, 2, 'Two sequence returned')
    t.deepEquals(sequences[0], {start: 0, end: 3}, 'Proper start and end positions reported')
    t.deepEquals(sequences[1], {start: 5, end: 7}, 'Proper start and end positions reported for second sequence')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})
