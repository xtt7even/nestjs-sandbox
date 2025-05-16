import { MaxLength, MinLength } from 'class-validator';

export class CreateNoteDto {
  @MinLength(1)
  @MaxLength(60)
  title: string;

  @MinLength(1)
  content: string;
}
