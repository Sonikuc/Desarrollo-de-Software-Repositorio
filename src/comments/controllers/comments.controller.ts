import { Controller, Post, Param, Body, Delete, Get } from '@nestjs/common';
import { Comments } from '../entities/comments.entity';
import { CommentsService } from '../services/comments.service';


@Controller('comments')
export class CommentsController {
 
    constructor(private commentService: CommentsService){
    }

    @Get(':id')
    getOneCourse(@Param('id') id: number){
        return this.commentService.findOne(id);
    }

    @Post(':id_Student/:id')
    addComment(@Body() body: Comments, @Param(':id_Student') id_Student:number, @Param(':id') id:number){
        return this.commentService.addComment(body,id_Student, id);
    }

    @Delete(':id_Student/:id')
    delete(@Param(':id_Student') id_Student:number, @Param('id') id:number){

        return this.commentService.delete(id_Student, id);
    }
}
