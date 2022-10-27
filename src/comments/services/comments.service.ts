import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Repository } from 'typeorm';
import { Comments } from '../entities/comments.entity';
import { Student } from "src/student/entities/student.entity";

@Injectable()
export class CommentsService {
     
    constructor(@InjectRepository(Comments) private commentrepo: Repository<Comments>,
    @InjectRepository(Lessons) private lessonsrepo: Repository<Lessons>,
    @InjectRepository(Student) private studentrepo: Repository<Student>
    ){}

   async addComment(data: Comments, id_Student:number, id:number){
        const lesson = await this.lessonsrepo.findOne({where: {id: id}});
        const student2 = await this.studentrepo.findOne({where: {id_Student: id}});
        if (!lesson) {
            throw new Notification ('Leccion no encontrada')
        }
        const newComment = new Comments();
        newComment.id = data.id;
        newComment.text = data.text;
        newComment.student = student2;
        return this.commentrepo.save(newComment);
   }

   async delete(id:number){

    await this.commentrepo.delete(id);
    return true;
}
}
