import { Category } from 'src/category/entities/category.entity';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
@Entity('courses')
export class Courses{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    tittle: string;

    @Column()
    description: string;

    @OneToMany(() => Lessons, (lessons)=>lessons.course)
    lessons: Lessons[]

    @OneToOne(() => Category)
    @JoinColumn({name: 'category_id'})
    category: Category

}