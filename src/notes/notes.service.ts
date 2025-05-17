import { Injectable, NotFoundException } from '@nestjs/common';
import { Notes } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto, GetNoteDto } from './dto/notes.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async getNoteById(dto: GetNoteDto) {
    const note = await this.prisma.notes.findUnique({
      where: { id: dto.id },
    });
    if (!note) throw new NotFoundException();
    return note;
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
