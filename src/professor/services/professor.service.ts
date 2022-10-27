/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from '../entities/professor.entity';

@Injectable()
export class ProfessorService {


    constructor( @InjectRepository(Professor) private ProfessorRepo: Repository<Professor>,
        private professor: Professor
    ){ }


    findAll(){

        return this.ProfessorRepo.find();
    }

    findOne(id: number){

        return this.ProfessorRepo.findOne({where: { id_Professor : id }});
    }

    create(body : any){

        const newProfessor = this.ProfessorRepo.create(body);
        return this.ProfessorRepo.save(newProfessor);
    }

    async update(id: number, body: any){

        const Professor = await this.ProfessorRepo.findOne({where: { id_Professor : id }});
        this.ProfessorRepo.merge(Professor, body);
        return this.ProfessorRepo.save(Professor);
    }

    async delete(id:number){

        await this.ProfessorRepo.delete(id);
        return true;
    }

 /*   suspendCourse(id: number, state:string){
        this.professor.changeCourseState(id,state);
    }
    */
}
