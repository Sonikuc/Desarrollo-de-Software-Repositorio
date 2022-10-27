import { Module } from '@nestjs/common';
import { CRUDCoursesService } from './services/courses.service';
import { CoursesController } from './controllers/courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Courses } from './entities/courses.entity';
import { Professor } from 'src/professor/entities/professor.entity';
import { Suscription } from 'src/suscription/entities/suscription.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Courses, Professor, Suscription])
  ],
  providers: [CRUDCoursesService],
  controllers: [CoursesController]
})
export class CoursesModule {}
