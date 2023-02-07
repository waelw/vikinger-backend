import { EentertainmentTypes, PrismaClient } from "@prisma/client"
import { USERS } from "./users"
import { faker } from '@faker-js/faker';
import countrySeed from "./countryCitySeed"
const prisma = new PrismaClient()
async function main() {
	// USERS.map(async user => {
	// 	await prisma.user.upsert({
	// 		where: { email: user.email },
	// 		update: {},
	// 		create: {
	// 			email: user.email,
	// 			username: user.user_name,
	// 			password: user.password,
	// 		},
	// 	})
	//
	// const Ent = [EentertainmentTypes.BOOKS, EentertainmentTypes.GAMES,EentertainmentTypes.HOBBIES,EentertainmentTypes.MOVIES, EentertainmentTypes.MUSIC_ARTISTS,EentertainmentTypes.TV_SHOWS] 
	// for(let i = 0; i < 500 ; i++){
	// 	await prisma.entertainment.create({
	// 		data:{
	// 			title:faker.music.songName(),
	// 			type:EentertainmentTypes[Ent[i%6]]
	// 		}
	// 	})
	// }

	// countrySeed(prisma)
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
