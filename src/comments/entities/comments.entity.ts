import { Student } from 'src/student/entities/student.entity';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
@Entity('comments')
export class Comments{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    text:string
 
    @Column()
    student: string

    @ManyToOne(() => Lessons, (lesson)=> lesson.comments)
    @JoinColumn({name: 'lesson_id'})
    lesson: Lessons;
    
    Student: Student;
}