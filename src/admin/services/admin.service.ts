/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './../entities/admin.entity';

@Injectable()
export class AdminService {

    constructor( @InjectRepository(Admin) private AdminRepo: Repository<Admin>
    
    ){ }


    findAll(){

        return this.AdminRepo.find();
    }

    findOne(id: number){

        return this.AdminRepo.findOne({where: { id_Admin : id }});
    }

    create(body : any){

        const newAdmin = this.AdminRepo.create(body);
        return this.AdminRepo.save(newAdmin);
    }

    async update(id: number, body: any){

        const admin = await this.AdminRepo.findOne({where: { id_Admin : id }});
        this.AdminRepo.merge(admin, body);
        return this.AdminRepo.save(admin);
    }

    async delete(id:number){

        await this.AdminRepo.delete(id);
        return true;
    }
}
