import { Courses } from 'src/courses/entities/courses.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('lessons')
export class Lessons{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tittle: string;

    @Column()
    duration: number;

    @Column()
    link: string;

    @ManyToOne(() => Courses, (course)=> course.lessons)
    @JoinColumn({name: 'course_id'})
    course: Courses;

}