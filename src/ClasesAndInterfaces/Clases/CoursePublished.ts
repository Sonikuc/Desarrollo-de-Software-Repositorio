import { ICourseState } from "../Interfaces/InterfaceCourseState";

/* eslint-disable prettier/prettier */
export class CoursePublished implements ICourseState{

    showState():string{

        return 'El Curso ha sido publicado';
    }
}