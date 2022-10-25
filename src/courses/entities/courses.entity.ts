import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity('courses')
export class Courses{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    tittle: string;

    @Column()
    description: string;

    @OneToMany(() => Lessons, (lessons)=>lessons.course)
    lessons: Lessons[]
}