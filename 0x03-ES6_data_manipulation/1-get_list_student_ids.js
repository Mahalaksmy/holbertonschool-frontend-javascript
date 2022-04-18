/* This is a function getListStudentIds that returns an
array of ids from a list of object. */

export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.map((x) => x.id);
  }
  return [];
}
