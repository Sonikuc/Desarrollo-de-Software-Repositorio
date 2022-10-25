import { Student } from 'src/student/entities/student.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('comments')
export class Comments{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    text:string

    @Column()
    student: string

    Student: Student;
}