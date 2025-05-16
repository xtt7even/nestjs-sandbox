import { Controller, Get } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller()
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('notes')
  getNote() {
    return this.notesService.getNote();
  }
}
