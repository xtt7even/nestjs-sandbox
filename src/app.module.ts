import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NotesModule, PrismaModule],
  providers: [PrismaService, PrismaModule],
})
export class AppModule {}
