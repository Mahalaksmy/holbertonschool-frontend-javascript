/* This is  a function function getStudentIdsSum
that returns the sum of all the student ids */

export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((accumulator, x) => accumulator + x.id, 0);
}
