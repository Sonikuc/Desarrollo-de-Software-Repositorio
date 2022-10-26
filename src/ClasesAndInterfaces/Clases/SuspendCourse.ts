/* eslint-disable prettier/prettier */
import { Courses } from "src/courses/entities/courses.entity";
import { ICourseService } from "../Interfaces/InterfaceCourseService";
import { CourseSuspended } from "./CourseSuspended";

class SuspendCourse implements ICourseService{

    execute(c: Courses): void {
        
        c.transitionTo(new CourseSuspended());
    }
}