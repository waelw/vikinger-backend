import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}
