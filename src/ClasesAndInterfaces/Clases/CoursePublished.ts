import { ICourseState } from "../Interfaces/InterfaceCourseState";

/* eslint-disable prettier/prettier */
class CoursePublished implements ICourseState{

    showState():string{

        return 'El Curso ha sido publicado';
    }
}