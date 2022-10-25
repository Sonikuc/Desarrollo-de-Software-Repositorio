/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ProfessorService } from './services/professor.service';
import { ProfessorController } from './controller/professor.controller';
import { Professor } from './entities/professor.entity';


@Module({
  imports: [

    TypeOrmModule.forFeature([Professor])
  ],
  providers: [ProfessorService],
  controllers: [ProfessorController]
})
export class ProfessorModule {}
