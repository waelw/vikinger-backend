import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';
import { PrismaClient } from '@prisma/client';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}


  @Get()
   getAllQuestions(){
   return this.questionService.getAllQuestions()   
}

}
