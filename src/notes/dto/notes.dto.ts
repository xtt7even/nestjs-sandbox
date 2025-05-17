import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @MaxLength(60)
  title: string;

  @IsNotEmpty()
  content: string;
}

export class GetNoteDto {
  @Transform(({ value }) => Number(value))
  @IsInt()
  id: number;
}
