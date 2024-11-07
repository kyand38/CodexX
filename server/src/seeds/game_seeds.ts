//Store each game by integer Id
//title, genre, platform, releaseDate, imageUrl
import { Game } from "../models/index.js";

export const seedGames = async () => {
    try {
        const games = [
            {
                title: 'Ghost of Tsushima',
                genre: 'Action-Adventure',
                platform: 'Playstation',
                releaseDate: new Date('2020-07-17'),
                imageUrl: ''
            },
            {
                title: 'Sekiro Shadows Die Twice',
                genre: 'Souls-like',
                platform: 'Playstation',
                releaseDate: new Date('2019-03-22'),
                imageUrl: ''
            },
            {
                title: 'League of Legends',
                genre: 'MOBA',
                platform: 'PC',
                releaseDate: new Date('2009-10-27'),
                imageUrl: ''
            }
        ]
        await Game.bulkCreate(games)
        console.log('Games have been successfully seeded.');
    }
    catch (error) {
        console.error('Error seeding games:', error)
    }
}
