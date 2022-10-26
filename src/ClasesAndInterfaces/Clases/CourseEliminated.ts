/* eslint-disable prettier/prettier */

import { ICourseState } from "../Interfaces/InterfaceCourseState";

class CourseEliminated implements ICourseState{


    showState(): string {
        
        return 'El curso ha sido eliminado';
    }
}