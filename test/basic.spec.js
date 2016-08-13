'use strict'

const test = require('tape')

test('basic case', t => {
  t.plan(2)
  try {
    const ids = require('../')
    const sequences = ids([0, 0, 0, 1], 0)
    t.equals(sequences.length, 1, 'One sequence returned')
    t.deepEquals(sequences[0], {start: 0, end: 2}, 'Proper start and end positions reported')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})

test('no elements found', t => {
  t.plan(1)
  try {
    const ids = require('../')
    const sequences = ids([1, 1, 1, 1], 0)
    t.equals(sequences.length, 0, 'No sequences returned')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})

test('multiple sequences', t => {
  t.plan(5)
  try {
    const ids = require('../')
    const sequences = ids([0, 1, 0, 1, 0, 0, 0, 3, 4, 0, 0], 0)
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
    const ids = require('../')
    const sequences = ids([0, 0, 0, 0], 0)
    t.equals(sequences.length, 1, 'One sequence returned')
    t.deepEquals(sequences[0], {start: 0, end: 3}, 'Proper start and end positions reported')
  } catch (e) {
    t.fail(e.toString())
    t.end()
  }
})
