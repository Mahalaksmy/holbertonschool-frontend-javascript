// Let's build a Teacher interface

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Javier',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'Uruguay',
  contract: false,
};
  console.log(teacher3);