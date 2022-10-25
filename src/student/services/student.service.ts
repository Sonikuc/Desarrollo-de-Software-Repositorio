/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentService {


    constructor(
        @InjectRepository(Student) private StudentRepo: Repository<Student>
    ){}

    findAll(){

        return this.StudentRepo.find();
    }

    findOne(id: number){

        return this.StudentRepo.findOne({where: { id_Student : id }});
    }

    create(body : any){

        const newProfessor = this.StudentRepo.create(body);
        return this.StudentRepo.save(newProfessor);
    }

    async update(id: number, body: any){

        const Professor = await this.StudentRepo.findOne({where: { id_Student : id }});
        this.StudentRepo.merge(Professor, body);
        return this.StudentRepo.save(Professor);
    }

    async delete(id:number){

        await this.StudentRepo.delete(id);
        return true;
    }
}
