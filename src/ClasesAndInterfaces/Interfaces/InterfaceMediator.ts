/* eslint-disable prettier/prettier */
import { Person } from "person/person";
import { Courses } from "src/courses/entities/courses.entity";


export interface IMediator{

    notify(p:Person, c:Courses):void;
}