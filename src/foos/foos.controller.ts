import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WordsService } from './foos.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  findAll(): string {
    return 'ok';
  }

  // GET api/words/:word — must come before any future /:id-style routes
  @Get(':word')
  lookup(@Param('word') word: string): number {
    return this.wordsService.lookup(word);
  }

  @Post()
  create(@Body('url') url: string): string {
    return url;
  }
}
