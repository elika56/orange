import { Body, Controller, Get, Post } from '@nestjs/common';
import { Foo } from './entities/foo.entity';

@Controller('foos')
export class FoosController {
  @Get()
  findAll(): string {
    return 'ok';
  }

  @Post()
  create(@Body() foo: Foo): Foo {
    return foo;
  }
}
