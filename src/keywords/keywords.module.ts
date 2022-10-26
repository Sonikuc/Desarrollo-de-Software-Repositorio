/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { KeywordsController } from './controllers/keywords/keywords.controller';
import { Keyword } from './entities/keywords.entity';
import { KeywordsService } from './services/keywords.service';
import { TypeOrmModule} from '@nestjs/typeorm';

@Module({

  imports: [

    TypeOrmModule.forFeature([Keyword])
  ],
  controllers: [KeywordsController],
  providers: [KeywordsService]
})
export class KeywordsModule {}
