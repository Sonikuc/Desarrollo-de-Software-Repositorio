import { CRUDCoursesService } from "./../services/courses.service";
export declare class CoursesController {
    private CRUDcourseService;
    constructor(CRUDcourseService: CRUDCoursesService);
    getAllCourses(): Promise<import("../entities/courses.entity").Courses[]>;
    getOneCourse(id: number): Promise<import("../entities/courses.entity").Courses>;
    createCourse(body: any): Promise<import("../entities/courses.entity").Courses>;
    updateCourse(id: number, body: any): Promise<import("../entities/courses.entity").Courses>;
    deleteCourse(id: number): Promise<string>;
}
