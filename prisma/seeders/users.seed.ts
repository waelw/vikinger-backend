import { PrismaClient } from "@prisma/client"
import { USERS } from "prisma/users"

const userSeed = () => {
	const prisma = new PrismaClient()

	USERS.map(async user => {
		await prisma.user.upsert({
			where: { email: user.email },
			update: {},
			create: {
				email: user.email,
				username: user.user_name,
				password: user.password,
			},
		})
	})
}

export default userSeed
