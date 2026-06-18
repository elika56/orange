import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { WordsService, ProcessUrlResult } from './foos.service';
import { ProcessUrlDto } from './dto/process-url.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  findAll(): string {
    return this.wordsService.findAll();
  }

  // GET api/words/:word -- must come before any future /:id-style routes
  @Get(':word')
  lookup(@Param('word') word: string): number {
    return this.wordsService.lookup(word);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  processUrl(@Body() dto: ProcessUrlDto): Promise<ProcessUrlResult> {
    return this.wordsService.processUrl(dto);
  }
}