import { Lessons } from "src/lessons/entities/lessons.entity";
import { Student } from "./student.entity";

export interface StudentState {
    showState()
}

export class ActiveStudent implements StudentState{
    
    
    //doComment(lessons:Lessons, student: Student, text:string) {
        showState(): string {
        
            return 'Active';
        }
    //}
}

export class BlockedStudent implements StudentState{
    
    //doComment(lessons:Lessons, student: Student, text:string) {
        showState(): string {
        
            return 'Blocked';
        }
    //}
}