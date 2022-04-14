import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const ListArrayClass = [];
  const ArrayClass1 = new ClassRoom(19);
  const ArrayClass2 = new ClassRoom(20);
  const ArrayClass3 = new ClassRoom(34);
  ListArrayClass.push(ArrayClass1, ArrayClass2, ArrayClass3);
  return ListArrayClass;
}
