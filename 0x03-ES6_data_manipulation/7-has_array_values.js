/* This is a function a function named setFromArray
that returns a Set from an array. */

export default function hasValuesFromArray(Set, someArray) {
  return someArray.every((value) => Set.has(value));
}
