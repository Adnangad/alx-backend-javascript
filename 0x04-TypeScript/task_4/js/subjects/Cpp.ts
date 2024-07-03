/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects {
    export class Cpp extends Subject {
        getRequirements(): string{
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher(): string{
            if (this.getTeacher.experienceTeachingC && this.getTeacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.getTeacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}