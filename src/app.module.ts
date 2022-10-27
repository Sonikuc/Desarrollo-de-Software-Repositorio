import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from './config/config.module';
import {  } from "module";
import { typeOrmConfig } from './config/typeorm.config';
import { LessonsModule } from './lessons/lessons.module';
import { CommentsModule } from './comments/comments.module';
import { ProfessorModule } from './professor/professor.module';
import { CategoryModule } from './category/category.module';
import { KeywordsModule } from './keywords/keywords.module';
import { StudentModule } from './student/student.module';
import { SuscriptionModule } from './suscription/suscription.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    
    CoursesModule,
    
    ConfigModule,
    
    LessonsModule,

    ProfessorModule,

    CategoryModule,

    KeywordsModule,

    StudentModule,
    
    CommentsModule,
    
    SuscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
