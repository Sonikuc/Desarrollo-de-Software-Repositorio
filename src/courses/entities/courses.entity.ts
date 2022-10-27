import { Category } from 'src/category/entities/category.entity';
import { IObservable } from 'src/ClasesAndInterfaces/Clases/Observable';
import { ICourseState } from 'src/ClasesAndInterfaces/Interfaces/InterfaceCourseState';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Professor } from 'src/professor/entities/professor.entity';
import { Suscription } from 'src/suscription/entities/suscription.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
@Entity('courses')
export class Courses extends IObservable{


    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    tittle: string;

    @Column()
    description: string;

    @Column()
    state: string;

    @OneToMany(() => Lessons, (lessons)=>lessons.course)
    lessons: Lessons[];

    @OneToOne(() => Category)
    @JoinColumn({name: 'category_id'})
    category: Category;

    @ManyToOne(() => Professor, (professor)=> professor.course)
    @JoinColumn({name: 'profesor_id'})
    professor: Professor;

    @OneToMany(() => Suscription, (suscription) => suscription.course)
    suscription: Suscription

    courseState: ICourseState;

    getCourseState():ICourseState{

        return this.courseState;
    }

    transitionTo(courseState:ICourseState){

        this.courseState = courseState;
        this.state = "suspended"
        return this
        //agregar logica para guardar el estado en BD
    }

    notifyCourseState(c: Courses): void {
        for (let i of c.Observers)
		i.notified(this.courseState);

    }

}