import { IsNotEmpty, IsUrl } from 'class-validator';

export class ProcessUrlDto {
  @IsNotEmpty()
  @IsUrl()
  url!: string;
}