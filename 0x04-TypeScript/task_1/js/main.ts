// Let's build a Teacher interface

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

// Thi is interface named Directors that extends Teacher.
interface Directors extends Teacher {
  numberOfReports: number;

const teacher3: Teacher = {
  firstName: 'Javier',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'Uruguay',
  contract: false,
};
console.log(teacher3);


// This is a function printTeacher:
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}