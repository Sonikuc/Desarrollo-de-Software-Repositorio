/* eslint-disable prettier/prettier */

import { ICourseState } from "../Interfaces/InterfaceCourseState";


class CourseCreated implements ICourseState{


    showState(): string {
        
        return 'El curso ha sido creado';
    }

}