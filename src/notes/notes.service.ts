import { Body, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/notes.dto';

@Injectable()
export class NotesService {
  getNote() {
    return 'Just got a note from a service!';
  }

  createNote(createNoteDto: CreateNoteDto) {
    console.log('createdNote');
  }
}
