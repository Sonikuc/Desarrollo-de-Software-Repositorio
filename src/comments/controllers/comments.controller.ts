import { Controller, Post, Param, Body } from '@nestjs/common';
import { Comments } from '../entities/comments.entity';
import { CommentsService } from '../services/comments.service';

@Controller('comments')
export class CommentsController {
 
    constructor(private commentService: CommentsService){
    }

    @Post('lessons/:id')
    addComment(@Body() body: Comments, @Param(':id') id:number){
        return this.commentService.addComment(body,id);
    }
}
