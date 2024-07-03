interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}
interface Directors extends Teacher {
	numberOfReports: number;
}
function printTeacher(firstName: string, lastName: string): string{
	let temp: string = '';
	temp += firstName.substring(0, 1) + ". ";
	temp += lastName;
	return temp;
}

interface StudentConstructor{
	new(firstName: string, lastName: string): StudentInstance;
}
interface StudentInstance {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}
class StudentClass implements StudentInstance{
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return "Currently working";
	}
	displayName(): string {
		return `${this.firstName}`;
	}
}
const createStudent = (ctor: StudentConstructor, firstName: string, lastName: string): StudentInstance => {
    return new ctor(firstName, lastName);
};
const student = createStudent(StudentClass, "Jane", "Doe");
console.log(student.workOnHomework());