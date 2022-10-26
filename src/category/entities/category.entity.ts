/* eslint-disable prettier/prettier */
import { Courses } from 'src/courses/entities/courses.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id_Category: number;

    @Column()
    name: string;

    @OneToOne(() => Courses, (course) => course.category)
    course: Courses

}
