import { Module } from '@nestjs/common';
import { AdminService } from './services/admin.service';
import { AdminController } from './controller/admin.controller';

@Module({
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
