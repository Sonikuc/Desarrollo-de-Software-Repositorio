import { Lessons } from "src/lessons/entities/lessons.entity";
import { Student } from "./student.entity";

export interface StudentState {
    doComment(Lessons, Student, string)
}

export class ActiveStudent implements StudentState{
    
    
    doComment(Lessons: any, Student: any, string: any) {
       //logica hacerr comentario 
    }
}

export class BlockedStudent implements StudentState{
    
    
    doComment(Lessons: any, Student: any, string: any) {
       //logica hacerr comentario 
    }
}