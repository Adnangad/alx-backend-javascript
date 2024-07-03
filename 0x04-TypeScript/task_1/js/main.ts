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
console.log(printTeacher("John", "Doe"));
