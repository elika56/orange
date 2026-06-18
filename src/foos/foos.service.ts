import { BadGatewayException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ProcessUrlDto } from './dto/process-url.dto';

export interface ProcessUrlResult {
  wordsProcessed: number;
}

@Injectable()
export class WordsService {
  private static wordDic: Record<string, number> = {
    hello: 1,
    world: 2,
    orange: 42,
  };

  constructor(private readonly httpService: HttpService) {}

  lookup(word: string): number {
    return WordsService.wordDic[word] ?? 0;
  }

  findAll(): string {
    return 'ok';
  }

  async processUrl(dto: ProcessUrlDto): Promise<ProcessUrlResult> {
    let text: string;

    try {
      const response = await firstValueFrom(
        this.httpService.get<string>(dto.url, { responseType: 'text' }),
      );

      text = response.data;
    } catch (err: unknown) {
      if (err instanceof BadGatewayException) {
        throw err;
      }
      // Axios throws on non-2xx by default; surface as BadGateway if we have a response
      if (
        err !== null &&
        typeof err === 'object' &&
        'response' in err &&
        err.response !== null &&
        typeof err.response === 'object' &&
        'status' in err.response
      ) {
        const status = (err.response as { status: number }).status;
        throw new BadGatewayException(
          `Upstream responded with status ${status}`,
        );
      }
      // No response means a connection/network error
      throw new BadGatewayException(`Could not reach URL: ${dto.url}`);
    }

    const tokens = text
      .replace(/[-,]/g, ' ')
      .toLowerCase()
      .split(/\s+/)
      .filter((t) => t.length > 0);

    for (const token of tokens) {
      if (WordsService.wordDic[token] !== undefined) {
        WordsService.wordDic[token]++;
      } else {
        WordsService.wordDic[token] = 1;
      }
    }

    return { wordsProcessed: tokens.length };
  }
}