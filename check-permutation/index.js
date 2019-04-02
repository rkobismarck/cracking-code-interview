/* 	Problem:
 	Given two strings, write a method to decide if one is a permutation of the other.
	Before starting:
	Assumptions->
        1.- We're having as parameters two strings.
        2.- Both of them should be different from undefined.
        3.- If the first string is a permutation of b, then b should be a permutation of a;
        as a consequence of that a.length should be equals to b.length.
        4.- When you're sure about the lenght of both of them, you can move forward and compare
        using may be a dictionary.
        5.- Are those strings sorted? We suppose that they're not sorted at this moment.
*/
'use strict'
const permutation = () => {
  const isPermutation = (elementsFirstCollection, elementsSecondCollection) => {
    if (elementsFirstCollection === undefined || elementsSecondCollection === undefined) {
      return false
    }
    if (elementsFirstCollection.length !== elementsSecondCollection.length) {
      return false
    }
    let mapOccurrences = []

    // O(n)
    for (let index = 0; index < elementsFirstCollection.length; index++) {
      let elementAtFirstCollection = elementsFirstCollection.charAt(index)
      mapOccurrences[elementAtFirstCollection] = mapOccurrences[elementAtFirstCollection] === undefined ? 1 : mapOccurrences[elementAtFirstCollection] + 1
    }

    // O(n)
    for (let index = 0; index < elementsSecondCollection.length; index++) {
      let elementAtSecondCollection = elementsSecondCollection.charAt(index)
      if (mapOccurrences[elementAtSecondCollection] === undefined) {
        return false
      }
      mapOccurrences[elementAtSecondCollection]--
      if (mapOccurrences[elementAtSecondCollection] < 0) {
        return false
      }
    }
    // Complexity Time => On + On = O2N -> O(n)
    return true
  }

  return { isPermutation }
}
module.exports = permutation()
