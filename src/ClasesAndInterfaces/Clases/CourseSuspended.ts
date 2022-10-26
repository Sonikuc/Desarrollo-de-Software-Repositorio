import { ICourseState } from "../Interfaces/InterfaceCourseState";

/* eslint-disable prettier/prettier */
export class CourseSuspended implements ICourseState{

    showState(): string {
        
        return 'El curso ha sido suspendido';
    }
}