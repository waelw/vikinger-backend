import { faker } from "@faker-js/faker"
import { EentertainmentTypes, PrismaClient } from "@prisma/client"

const entertainmentSeed = async () => {
	const prisma = new PrismaClient()
	for (let i = 0; i < 30; i++) {
		await prisma.entertainment.create({
			data: {
				title: faker.music.songName(),
				type: EentertainmentTypes[Ent[i % 6]],
			},
		})
	}
}
const Ent = [
	EentertainmentTypes.BOOKS,
	EentertainmentTypes.GAMES,
	EentertainmentTypes.HOBBIES,
	EentertainmentTypes.MOVIES,
	EentertainmentTypes.MUSIC_ARTISTS,
	EentertainmentTypes.TV_SHOWS,
]

export default entertainmentSeed
