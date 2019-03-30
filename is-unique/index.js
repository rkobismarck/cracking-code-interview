/* 	Problem:
 	Implement an algorithm to determine if a string has all unique characters.
	What if you can't use additional data structures?
	Before starting:
	Assumptions->
		1.- Since the fact that we're using as a parameter a string, an input different from a string like undefined will be considered automatically like false.
		2.- A string that should be evaluated at at least should have a length of two, because in the case of one it's evident the uniqueness condition, and an empty be considered as unique.
*/
'use strict'
const unique = (argument) => {
  const isUnique = (argument) => {
    // Basic input verification.
    if (argument === undefined) {
      return false
    }
    if (argument.length > 1) {
      // Conversion to iterable object.
      let elementCollection = argument.split('')
      let mapUniqueness = {}
      for (let index = 0; index < elementCollection.length; index++) {
        let elementAtIndex = elementCollection[index]
        if (mapUniqueness[elementAtIndex] !== undefined) {
          return false
        }
        mapUniqueness[elementAtIndex] = true
      }
    }
    return true
  }
  return { isUnique }
}
module.exports = unique()
