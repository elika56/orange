import { Body, Controller, Get, Post } from '@nestjs/common';

class CreateWordDto {
  url: string;
}

@Controller('foos')
export class WordsController {
  @Get()
  findAll(): string {
    return 'ok';
  }

  @Post()
  create(@Body() dto: CreateWordDto): string {
    return dto.url;
  }
}
