/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ICourseState } from "./InterfaceCourseState";


export interface IObserver{

    notified(s: ICourseState):void;
}