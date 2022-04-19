/* a function updateStudentGradeByCity that returns an array
of students for a specific city with their new grade */

export default function updateStudentGradeByCity(ListStudents, city, grades) {
  return ListStudents
    .filter((item) => item.location === city)
    .map((student) => {
      const gradeItems = grades
        .filter((item) => item.studentId === student.id)
        .map((n) => n.grade)[0];
      const grade = gradeItems || 'N/A';
      return { ...student, grade };
    });
}
