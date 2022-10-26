/* eslint-disable prettier/prettier */
import { Courses } from "src/courses/entities/courses.entity";


interface IMediator{

    notify(p:Person, c:Courses):void;
}