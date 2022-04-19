/* This is  a function named groceriesList that returns a map of groceries
with the following items (name, quantity) */

export default function groceriesList() {
  const listArray = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const listsMap = new Map();
  for (const elements of listArray) {
    listsMap.set(elements[0], elements[1]);
  }
  return listsMap;
}
