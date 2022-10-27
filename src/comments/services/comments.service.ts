import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Repository } from 'typeorm';
import { Comments } from '../entities/comments.entity';

@Injectable()
export class CommentsService {
     
    constructor(@InjectRepository(Comments) private commentrepo: Repository<Comments>,
    @InjectRepository(Lessons) private lessonsrepo: Repository<Lessons>
    ){}

   async addComment(data: Comments, id_Student:string, id:number){
        const lesson = await this.lessonsrepo.findOne({where: {id: id}});
        if (!lesson) {
            throw new Notification ('Leccion no encontrada')
        }
        const newComment = new Comments();
        newComment.id = data.id;
        newComment.text = data.text;
        newComment.student = id_Student;
        return this.commentrepo.save(newComment);
   }

   async delete(id:number){

    await this.commentrepo.delete(id);
    return true;
}
}
