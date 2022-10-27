import { Student } from 'src/student/entities/student.entity';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
@Entity('comments')
export class Comments{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    text:string
 
    @OneToOne(() => Student)
    @JoinColumn({name: 'student_id'})
    student: Student;

    @ManyToOne(() => Lessons, (lesson)=> lesson.comments)
    @JoinColumn({name: 'lesson_id'})
    lesson: Lessons;
    
}