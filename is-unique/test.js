'use strict';
const app    = require('./index.js');
var assert 	 = require('assert');

describe('Validate the uniqueness of a string passed to the function.', () => {
  it('It should be able to return a false value, for a undefined input', () => {
    assert.equal(false, app.isUnique());
  });
  it('It should be able to return a true value, for an input with one character', () => {
    assert.equal(true, app.isUnique("A"));
  });
  it('It should be able to return a true value, for an input with one character', () => {
    assert.equal(true, app.isUnique(" "));
  });
  it('It should be able to return a false value, for an input with empty spaces', () => {
    assert.equal(false, app.isUnique("  "));
  });
  it('It should be able to return a true value, for an input with empty spaces', () => {
    assert.equal(true, app.isUnique(" aBcd"));
  });
  it('It should be able to return a true value, for an input with empty spaces', () => {
    assert.equal(true, app.isUnique("aB cdefg"));
  });
});
