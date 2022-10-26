/* eslint-disable prettier/prettier */

import { ICourseState } from "../Interfaces/InterfaceCourseState";
import { IObserver } from "../Interfaces/InterfaceObserver";

// eslint-disable-next-line prettier/prettier

abstract class Observable{

    Observers: IObserver[] = new Array<IObserver>()

    
    addObserver(observer:IObserver):void{

        this.Observers.push(observer);
    }

    deleteObserver(observer:IObserver):void{

        const pos = this.Observers.indexOf(observer);

        this.Observers.splice(pos,1);
    }

    abstract notifyCourseState(s:ICourseState):void
}