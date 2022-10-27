import { Controller, Post, Param, Body, Delete } from '@nestjs/common';
import { Comments } from '../entities/comments.entity';
import { CommentsService } from '../services/comments.service';

@Controller('comments')
export class CommentsController {
 
    constructor(private commentService: CommentsService){
    }

    @Post('lessons/:id_Student/:id')
    addComment(@Body() body: Comments, @Param(':id_Student') id_Student:string, @Param(':id') id:number){
        return this.commentService.addComment(body,id_Student, id);
    }

    @Delete(':id')
    delete(@Param('id') id:number){

        return this.commentService.delete(id);
    }
}
