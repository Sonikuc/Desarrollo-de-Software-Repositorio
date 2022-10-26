import { ICourseState } from "../Interfaces/InterfaceCourseState";

/* eslint-disable prettier/prettier */
class CourseSuspended implements ICourseState{

    showState(): string {
        
        return 'El curso ha sido suspendido';
    }
}