//Store each game by integer Id
//title, genre, platform, releaseDate, imageUrl
import { Game } from "../models/index.js"; 

export const seedGame = async () => {
    await Game.bulkCreate
}