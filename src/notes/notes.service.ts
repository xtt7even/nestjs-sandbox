import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  getNote() {
    return 'Just got a note from a service!';
  }
}
