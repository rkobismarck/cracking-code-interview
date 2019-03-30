/* global,it */
'use strict'
const app = require('./index.js')
const assert = require('assert')

describe('Validate the uniqueness of a string passed to the function.', () => {
  it('It should be able to return a false value, for a undefined input', () => {
    assert.strictEqual(false, app.isUnique())
  })
  it('It should be able to return a true value, for an input with one character', () => {
    assert.strictEqual(true, app.isUnique('A'))
  })
  it('It should be able to return a true value, for an input with one character', () => {
    assert.strictEqual(true, app.isUnique(' '))
  })
  it('It should be able to return a false value, for an input with empty spaces', () => {
    assert.strictEqual(false, app.isUnique('  '))
  })
  it('It should be able to return a true value, for an input with empty spaces', () => {
    assert.strictEqual(true, app.isUnique(' aBcd'))
  })
  it('It should be able to return a true value, for an input with empty spaces', () => {
    assert.strictEqual(true, app.isUnique('aB cdefg'))
  })
})
