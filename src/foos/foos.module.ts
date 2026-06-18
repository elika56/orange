import { Module } from '@nestjs/common';
import { WordsController } from './foos.controller';

@Module({
  controllers: [WordsController],
})
export class FoosModule {}
