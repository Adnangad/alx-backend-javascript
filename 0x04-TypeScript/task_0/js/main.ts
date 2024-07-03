interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const stud1 = {firstName: "Adnan", lastName: "Gard", age:20, location: "Kenya"};
const stud2 = {firstName: "Obuya", lastName: "Sham", age:23, location: "Nairobi"};

const ar: Student[] = [stud1, stud2];

function renderTable(): void {
    let table = '<table>';
    table += '<tr><th>firstName</th><th>location</th></tr>';
    ar.forEach(item => {
        table += `<tr><td>${item.firstName}</td><td>${item.location}</td></tr>`;
    });
    table += '</table>'
    document.body.innerHTML = table;
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
