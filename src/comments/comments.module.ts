import { Module } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './controllers/comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Comments } from './entities/comments.entity';
import { Student } from 'src/student/entities/student.entity';
import { Courses } from 'src/courses/entities/courses.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comments, Lessons, Student, Courses])
  ],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule {}
