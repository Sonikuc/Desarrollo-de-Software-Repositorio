import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from './config/config.module';
import {  } from "module";
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    
    CoursesModule,
    
    ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
