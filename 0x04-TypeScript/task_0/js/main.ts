interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Oliveth",
  lastName: "Ndubuka",
  age: 69,
  location: "Lagos, Nigeria",
};

const student2: Student = {
  firstName: "Victor",
  lastName: "Afolabi",
  age: 87,
  location: "Dutse, Nigeria",
};

let studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let newTable = document.createElement("table");

for (let i = 0; i < studentsList.length; i++) {
  let row = newTable.insertRow();
  let name = row.insertCell();
  let location = row.insertCell();
  name.innerHTML = studentsList[i].firstName;
  location.innerHTML = studentsList[i].location;
}

document.body.appendChild(newTable);
