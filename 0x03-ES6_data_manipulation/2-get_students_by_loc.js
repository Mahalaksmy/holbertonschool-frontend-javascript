/* This is  a function getStudentsByLocation that returns an array
of objects who are located in a specific city */

export default function getStudentsByLocation(getListStudents, city) {
  const result = getListStudents.filter((x) => x.location === city);
  return result;
}
