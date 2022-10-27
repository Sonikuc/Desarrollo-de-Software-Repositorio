/* eslint-disable prettier/prettier */
import { Person } from 'person/person';
import { Comments } from 'src/comments/entities/comments.entity';
import { Suscription } from 'src/suscription/entities/suscription.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { StudentState } from './studentstate';

@Entity('student')
export class Student extends Person{

    @PrimaryGeneratedColumn('increment')
    id_Student: number;

    @Column()
    email: string


    @Column()
    state: string;

    //@OneToOne(() => Comments)
    //comment: Comments;

    @OneToMany(() => Suscription, (suscription) => suscription.course)
    suscription: Suscription

    studentState: StudentState
}