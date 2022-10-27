import { Controller, Post, Param, Body, Delete, Get } from '@nestjs/common';
import { Comments } from '../entities/comments.entity';
import { CommentsService } from '../services/comments.service';


@Controller('comments')
export class CommentsController {
 
    constructor(private commentService: CommentsService){
    }

    @Get(':id')
    getOneComment(@Param('id') id: number){
        return this.commentService.findOne(id);
    }

    @Post('/create/student/:id_s/lesson/:id_c')
    addComment( @Param('id_s') id_s: number, @Param('id_c') id_c: number, @Body() body:any){
        console.log('estudiante: '+ id_s)
        console.log('leccion ' + id_c)
        return this.commentService.addComment(body,id_s, id_c);
    }

    @Delete('/delete/student/:id_s/lesson/:id_c')
    delete(@Param('id_s') id_s:number, @Param('id_c') id_c:number){
        console.log('estudiante: '+ id_s)
        console.log('leccion ' + id_c)
        return this.commentService.delete(id_s, id_c);
    }
}
