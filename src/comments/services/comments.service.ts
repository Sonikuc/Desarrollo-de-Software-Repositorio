import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Repository } from 'typeorm';
import { Comments } from '../entities/comments.entity';
import { Student } from "src/student/entities/student.entity";
import { Courses } from 'src/courses/entities/courses.entity';

@Injectable()
export class CommentsService {
     
    constructor(@InjectRepository(Comments) private commentrepo: Repository<Comments>,
    @InjectRepository(Lessons) private lessonsrepo: Repository<Lessons>,
    @InjectRepository(Student) private studentrepo: Repository<Student>,
    @InjectRepository(Courses) private courserepo: Repository<Courses>
    ){}

    findOne(id_comment: number){
        return this.commentrepo.findOne({where: {id: id_comment}});
    }

   async addComment(data: any, id_Student:number, id:number, id_c: number){
        const lesson = await this.lessonsrepo.findOne({where: {id: id}});
        const student2 = await this.studentrepo.findOne({where: {id_Student: id_Student}});
        const course = await this.courserepo.findOne({where:{id: id_c}})
        console.log('leccion' +lesson)
        console.log('estudiante' +student2)
        console.log('curso:' +course)
        if ((!lesson) || (!student2)){
            return ('Leccion o estudiante no encontrado')
        }

        if (course.state == 'published'){
            if (student2.state=='Active'){
                const newComment = new Comments();
                //newComment.id = data.id;
                newComment.text = data.text;
                newComment.student = student2;
                newComment.lesson = lesson;
                return this.commentrepo.save(newComment);
            }
            else return("No puede comentar, estas bloqueado");
        }
        else return ('No puede comentar en un curso que no esta publicado')


        
   }

    async delete(id_s:number, id_c:number){ 
        console.log('estudiante: '+ id_s)
        console.log('leccion ' + id_c)
        const qb = await this.commentrepo.createQueryBuilder("comments").where("comments.lesson_id = :id_c and comments.student_id =:id_s").setParameters({id_c,id_s}).getOne();
        if (!qb){ return ("No se encontro el comentario")}
        await this.commentrepo.delete(qb.id);
        return ('Comentario Eliminado')
    }
}
