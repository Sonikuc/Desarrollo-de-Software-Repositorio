/* eslint-disable prettier/prettier */
import { Person } from 'person/person';
import { IObservable } from 'src/ClasesAndInterfaces/Clases/Observable';
import { ICourseState } from 'src/ClasesAndInterfaces/Interfaces/InterfaceCourseState';
import { IObserver } from 'src/ClasesAndInterfaces/Interfaces/InterfaceObserver';
import { Comments } from 'src/comments/entities/comments.entity';
import { Suscription } from 'src/suscription/entities/suscription.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { StudentState } from './studentstate';

@Entity('student')
export class Student extends Person implements IObserver{

    @PrimaryGeneratedColumn('increment')
    id_Student: number;

    @Column()
    email: string


    @Column()
    state: string;

    @OneToOne(() => Comments)
    comment: Comments;

    @OneToMany(() => Suscription, (suscription) => suscription.course)
    suscription: Suscription

    studentState: StudentState

    notified(s: ICourseState): void {
        console.log('Nuevo correo: El curso al que esta suscrito esta ahora: ' + s.showState())
    }

    transitionTo(StundentState:StudentState):void{

        this.studentState = StundentState;
    }
}