/* This is a function  a function named createInt8TypedArray that returns a
new ArrayBuffer with an Int8 value at a specific position */

export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer, 0);

  if (position > length - 1) {
    throw Error('Position outside range');
  } else {
    dataview.setInt8(position, value);
  }
  return dataview;
}
