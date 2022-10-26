/* eslint-disable prettier/prettier */

import { Lessons } from "src/lessons/entities/lessons.entity";
import { Student } from "src/student/entities/student.entity";

interface IStudentState{

    comment(i:Lessons, s:Student, text:string):void;
}