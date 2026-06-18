import { Module } from '@nestjs/common';
import { FoosController } from './foos.controller';
import { WordsService } from './foos.service';

@Module({
  controllers: [FoosController],
  providers: [WordsService],
  exports: [WordsService],
})
export class FoosModule {}
