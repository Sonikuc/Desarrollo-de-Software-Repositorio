/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('admin')
export class AdminController {

    constructor(

        private adminService: AdminService
    ){}

    @Get()
    getAll(){
        return this.adminService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){

        return this.adminService.findOne(id);
    }

    @Post()
    create(@Body() body: any){

        return this.adminService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any){

        return this.adminService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){

        return this.adminService.delete(id);
    }
}
