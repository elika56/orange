import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WordsService } from './foos.service';
import { Foo } from './entities/foo.entity';

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
  create(@Body() foo: Foo): Foo {
    return foo;
  }
}
