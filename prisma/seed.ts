import { PrismaClient } from "@prisma/client"
import questionSeed from "./seeders/questions.seed"

const prisma = new PrismaClient()
async function main() {



	questionSeed()
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
