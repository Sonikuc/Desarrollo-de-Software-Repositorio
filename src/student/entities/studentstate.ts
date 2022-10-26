import { Lessons } from "src/lessons/entities/lessons.entity";
import { Student } from "./student.entity";

export interface StudentState {
    doComment(lessons:Lessons, student: Student, text:string)
}

export class ActiveStudent implements StudentState{
    
    
    doComment(lessons:Lessons, student: Student, text:string) {
       //logica hacerr comentario 
    }
}

export class BlockedStudent implements StudentState{
    
    
    doComment(lessons:Lessons, student: Student, text:string) {
       //logica hacerr comentario 
    }
}