/* This is  a function named getListStudents that returns
an array of objects. */

export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.map((x) => x.id);
  }
  return [];
}
