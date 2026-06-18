import { Module } from '@nestjs/common';
import { FoosModule } from './foos/foos.module';

@Module({
  imports: [FoosModule],
})
export class AppModule {}
