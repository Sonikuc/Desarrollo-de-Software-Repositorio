/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { KeywordsService } from 'src/keywords/services/keywords.service';

@Controller('keywords')
export class KeywordsController {


    constructor(

        private keywordService: KeywordsService
    ){}

    @Get()
    getAll(){
        return this.keywordService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){

        return this.keywordService.findOne(id);
    }

    @Post()
    create(@Body() body: any){

        return this.keywordService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any){

        return this.keywordService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){

        return this.keywordService.delete(id);
    }
}
