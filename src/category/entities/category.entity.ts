/* eslint-disable prettier/prettier */
import { Courses } from 'src/courses/entities/courses.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id_Category: number;

    @Column()
    name: string;

    @OneToMany(() => Courses, (course) => course.category)
    course: Courses

}
