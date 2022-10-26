/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Controller('category')
export class CategoryController {

    constructor(

        private categoryService: CategoryService
    ){}

    @Get()
    getAll(){
        return this.categoryService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){

        return this.categoryService.findOne(id);
    }

    @Post()
    create(@Body() body: any){

        return this.categoryService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any){

        return this.categoryService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){

        return this.categoryService.delete(id);
    }
}
