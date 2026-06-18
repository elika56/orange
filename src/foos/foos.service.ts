import { Injectable } from '@nestjs/common';

@Injectable()
export class WordsService {
  private readonly wordDic: Record<string, number> = {
    hello: 1,
    world: 2,
    orange: 42,
  };

  lookup(word: string): number {
    return this.wordDic[word] ?? 0;
  }
}
