/* This is a function named updateUniqueItems that returns an updated map
for all items with initial quantity at 1 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const elements of map) {
    if (elements[1] === 1) {
      map.set(elements[0], 100);
    }
  }
  return map;
}
