/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Repository } from 'typeorm';


@Entity()
export class Admin{

    @PrimaryGeneratedColumn()
    id_Admin: number;

    @Column()
    name: string;

    @Column()
    subname: string;

}