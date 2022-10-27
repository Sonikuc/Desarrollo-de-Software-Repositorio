/* eslint-disable prettier/prettier */
import { Person } from 'person/person';
import { Suscription } from 'src/suscription/entities/suscription.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StudentState } from './studentstate';

@Entity('student')
export class Student extends Person{

    @PrimaryGeneratedColumn('increment')
    id_Student: number;

    @Column()
    email: string


    @Column()
    state: string;

    @OneToMany(() => Suscription, (suscription) => suscription.course)
    suscription: Suscription

    studentState: StudentState
}