import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

const questionSeed = async()=>{
    const questions = ["what is your best friends's name ?","what is your high schoole name ?","Do you support Gay's rights?"]
    const prisma = new PrismaClient()

    await Promise.all(questions.map(question=>prisma.questions.create({
        data:{
            content:question
        }
    })))
}

export default questionSeed