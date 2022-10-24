import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('courses')
export class Courses{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    tittle: string;

    @Column()
    description: string;
}