/* eslint-disable prettier/prettier */

import { ICourseState } from "../Interfaces/InterfaceCourseState";

export class CourseEliminated implements ICourseState{


    showState(): string {
        
        return 'El curso ha sido eliminado';
    }
}