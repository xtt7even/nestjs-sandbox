import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @MaxLength(60)
  title: string;

  @IsNotEmpty()
  content: string;
}
