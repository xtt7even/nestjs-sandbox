import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/notes.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('get')
  getNote() {
    return this.notesService.getNote();
  }

  @Post('create')
  createNote(@Body() dto: CreateNoteDto) {
    console.log({ dto });
    this.notesService.createNote(dto);
  }
}
