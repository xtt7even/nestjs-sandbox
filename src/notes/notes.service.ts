import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/notes.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Notes } from 'generated/prisma';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  getNote() {
    return 'Just got a note from a service!';
  }

  async createNote(dto: CreateNoteDto) {
    const note: Notes = await this.prisma.notes.create({
      data: {
        title: dto.title,
        content: dto.content,
      },
    });
    return note;
  }
}
