/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ProfessorService } from './services/professor.service';
import { ProfessorController } from './controller/professor.controller';
import { Professor } from './entities/professor.entity';
import { CoursesModule } from 'src/courses/courses.module';


@Module({
  imports: [

    TypeOrmModule.forFeature([Professor]),
    CoursesModule
  ],
  providers: [ProfessorService, Professor],
  controllers: [ProfessorController]
})
export class ProfessorModule {}
