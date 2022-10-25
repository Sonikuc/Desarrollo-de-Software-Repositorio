/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor{

    @PrimaryGeneratedColumn()
    id_Professor: number;

    @Column()
    name: string;

    @Column()
    subname: string;
}