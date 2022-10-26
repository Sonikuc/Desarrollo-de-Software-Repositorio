/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id_Category: number;

    @Column()
    name: string;

}
