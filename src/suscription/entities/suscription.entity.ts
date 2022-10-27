import { Courses } from "src/courses/entities/courses.entity";
import { Student } from "src/student/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('suscription')
export class Suscription{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Student, (student)=> student.suscription)
    @JoinColumn({name: 'student_id'})
    student: Student;

    @ManyToOne(() => Courses, (course)=> course.suscription)
    @JoinColumn({name: 'course_id'})
    course: Courses;
}