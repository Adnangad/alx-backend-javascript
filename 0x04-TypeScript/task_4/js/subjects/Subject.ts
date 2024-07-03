/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        private _teacher: Teacher;
        constructor(teacher: Teacher) {
            this._teacher = teacher;
        }
        set setTeacher(teacher: any){
            this._teacher = teacher;
        }
        get getTeacher(): Teacher {
            return this._teacher;
        }
    }
}