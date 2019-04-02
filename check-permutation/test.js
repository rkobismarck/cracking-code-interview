  /* global,it */
'use strict'
const app = require('./index.js')
const assert = require('assert')

describe('Validate the first string is a permutation of the second string passed to the function.', () => {
  it('It should be able to return a false value, for a undefined input in the second parameter', () => {
    assert.strictEqual(false, app.isPermutation('aaa', undefined))
  })
  it('It should be able to return a false value, for a different input in the second parameter', () => {
    assert.strictEqual(false, app.isPermutation('aaa', 'ABC'))
  })
  it('It should be able to return a false value, for a undefined input', () => {
    assert.strictEqual(false, app.isPermutation('aaa', 'abc'))
  })
  it('It should be able to return a true value, for an input with same character in same order', () => {
    assert.strictEqual(true, app.isPermutation('aaa', 'aaa'))
  })
   it('It should be able to return a true value, for an input with same character in different order', () => {
    assert.strictEqual(true, app.isPermutation('abc', 'bca'))
  })
  it('It should be able to return a false value, for an input with different number of characters', () => {
    assert.strictEqual(false, app.isPermutation('abcde', 'abr'))
  })
  it('It should be able to return a true value, for an inputs with empty spaces', () => {
    assert.strictEqual(true, app.isPermutation('abced ',' abcde'))
  })
  it('It should be able to return a false value, for an input with empty spaces', () => {
    assert.strictEqual(false, app.isPermutation('abced',' abcde'))
  })
  it('It should be able to return a true value, for an input with empty space', () => {
    assert.strictEqual(true, app.isPermutation(' ',' '))
  })
})
