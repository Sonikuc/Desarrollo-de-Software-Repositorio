/* eslint-disable prettier/prettier */
import { Courses } from 'src/courses/entities/courses.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Professor{

    @PrimaryGeneratedColumn()
    id_Professor: number;

    @Column()
    name: string;

    @Column()
    subname: string;

    @OneToMany(() => Courses, (course)=> course.professor)
    course: Courses[];

}