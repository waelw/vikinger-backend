import { PrismaClient } from "@prisma/client"
import { USERS } from "./users"
const prisma = new PrismaClient()
async function main() {
	USERS.map(async (user) => {
		const userSeeded = await prisma.user.upsert({
			where: { email: user.email },
			update: {},
			create: {
				email: user.email,
				username: user.user_name,
				password: user.password,
			},
		})
		console.log({ userSeeded })
	})
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})