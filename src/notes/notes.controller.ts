import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/notes.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('get/:id')
  getNoteById(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.getNoteById({ id });
  }

  @Post('create')
  createNote(@Body() dto: CreateNoteDto) {
    console.log({ dto });
    this.notesService.createNote(dto);
  }
}
