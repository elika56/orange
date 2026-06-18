import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('words')
export class WordsController {
  @Get()
  findAll(): string {
    return 'ok';
  }

  @Post()
  create(@Body('url') url: string): string {
    return url;
  }
}
