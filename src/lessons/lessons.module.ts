import { Module } from '@nestjs/common';
import { LessonsService } from './services/lessons.service';
import { LessonsController } from './controllers/lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lessons } from './entities/lessons.entity';
import { Courses } from 'src/courses/entities/courses.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lessons, Courses])
  ],
  providers: [LessonsService],
  controllers: [LessonsController]
})
export class LessonsModule {}
