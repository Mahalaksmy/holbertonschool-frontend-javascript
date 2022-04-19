/* This is a function named cleanSet that returns a string of all the set
values that start with a specific string (startString). */

export default function cleanSet(set, startString) {
  let value = '';
  if (!startString || !startString.length) {
    return value;
  }
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      value += `${element.slice(startString.length)}-`;
    }
  });
  return value.slice(0, value.length - 1);
}
