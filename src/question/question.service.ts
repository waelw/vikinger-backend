import { Injectable } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class QuestionService {
	constructor(private readonly prisma: PrismaService) {}

	async getAllQuestions() {
		const questions = await this.prisma.questions.findMany()
		return questions
	}
}
