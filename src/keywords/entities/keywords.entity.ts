/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Keyword{

    @PrimaryGeneratedColumn()
    id_Keyword: number;

    @Column()
    name: string;

}

