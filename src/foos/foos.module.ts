import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WordsController } from './foos.controller';
import { WordsService } from './foos.service';

@Module({
  imports: [HttpModule],
  controllers: [WordsController],
  providers: [WordsService],
  exports: [WordsService],
})
export class FoosModule {}
