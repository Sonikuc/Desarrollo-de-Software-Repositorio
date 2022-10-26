/* eslint-disable prettier/prettier */

import { Courses } from "src/courses/entities/courses.entity";


export interface ICourseService{

    execute(c:Courses):void;
}