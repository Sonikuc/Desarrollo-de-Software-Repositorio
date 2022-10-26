/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {


    constructor(

        @InjectRepository(Category) private CategoryRepo: Repository<Category>
    ){}

    findAll(){

        return this.CategoryRepo.find();
    }

    findOne(id: number){

        return this.CategoryRepo.findOne({where: { id_Category : id }});
    }

    create(body : any){

        const newCategory = this.CategoryRepo.create(body);
        return this.CategoryRepo.save(newCategory);
    }

    async update(id: number, body: any){

        const Category = await this.CategoryRepo.findOne({where: { id_Category : id }});
        this.CategoryRepo.merge(Category, body);
        return this.CategoryRepo.save(Category);
    }

    async delete(id:number){

        await this.CategoryRepo.delete(id);
        return true;
    }
}
