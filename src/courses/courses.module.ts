import { Module } from '@nestjs/common';
import { CRUDCoursesService } from './services/courses.service';
import { CoursesController } from './controllers/courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Courses } from './entities/courses.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Courses])
  ],
  providers: [CRUDCoursesService],
  controllers: [CoursesController]
})
export class CoursesModule {}
