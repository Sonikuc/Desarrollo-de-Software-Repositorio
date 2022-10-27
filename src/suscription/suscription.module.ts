import { Module } from '@nestjs/common';
import { SuscriptionService } from './services/suscription.service';
import { SuscriptionController } from './controller/suscription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suscription } from './entities/suscription.entity';
import { Courses } from 'src/courses/entities/courses.entity';
import { Student } from 'src/student/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Suscription,Courses, Student])
  ],
  providers: [SuscriptionService],
  controllers: [SuscriptionController]
})
export class SuscriptionModule {}
