import { Controller, Get, Post } from '@nestjs/common';

@Controller('foos')
export class FoosController {
  @Get()
  findAll(): string {
    return 'ok';
  }

  @Post()
  create(): string {
    return 'ok';
  }
}
