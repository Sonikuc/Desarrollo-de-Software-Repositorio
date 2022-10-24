import { Repository } from 'typeorm';
import { Courses } from './../entities/courses.entity';
export declare class CRUDCoursesService {
    private coursesrepo;
    constructor(coursesrepo: Repository<Courses>);
    findAll(): Promise<Courses[]>;
    findOne(id_course: number): Promise<Courses>;
    createCourse(body: Courses): Promise<Courses>;
    updateCourse(id_course: number, body: Courses): Promise<Courses>;
    deleteCourse(id_course: number): Promise<string>;
}
