/* eslint-disable prettier/prettier */
import { Person } from 'person/person';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { StudentState } from './studentstate';

@Entity('student')
export class Student extends Person{

    @PrimaryGeneratedColumn('increment')
    id_Student: number;

    @Column()
    email: string


    @Column()
    state: string;

    @OneToOne(() => Comment, (comment) => comment)
    comment: Comment;
    

    studentState: StudentState
}