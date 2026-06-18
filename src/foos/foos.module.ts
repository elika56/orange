import { Module } from '@nestjs/common';
import { FoosController } from './foos.controller';

@Module({
  controllers: [FoosController],
})
export class FoosModule {}
