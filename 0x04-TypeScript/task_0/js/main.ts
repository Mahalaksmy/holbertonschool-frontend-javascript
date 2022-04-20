// This is interface named Student that accepts the following elements

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 : Student = {
    firstName:'Maria',
    lastName: 'Lopez',
    age: 21,
    location: 'Mexico',
}

const student2 : Student = {
    firstName:'Santiago',
    lastName: 'Marin',
    age: 32,
    location: 'Cartagena',
}

const studentsList = [student1, student2];

const table = document.createElement('table');

document.body.appendChild(table);