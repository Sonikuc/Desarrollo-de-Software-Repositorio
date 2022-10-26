/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keyword } from '../entities/keywords.entity';

@Injectable()
export class KeywordsService {

    constructor(
        @InjectRepository(Keyword) private KeywordRepo: Repository<Keyword>
    )
    {}

    findAll(){

        return this.KeywordRepo.find();
    }

    findOne(id: number){

        return this.KeywordRepo.findOne({where: { id_Keyword : id }});
    }

    create(body : any){

        const newKeyword = this.KeywordRepo.create(body);
        return this.KeywordRepo.save(newKeyword);
    }

    async update(id: number, body: any){

        const Keyword = await this.KeywordRepo.findOne({where: { id_Keyword : id }});
        this.KeywordRepo.merge(Keyword, body);
        return this.KeywordRepo.save(Keyword);
    }

    async delete(id:number){

        await this.KeywordRepo.delete(id);
        return true;
    }
}
