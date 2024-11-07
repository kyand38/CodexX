//Store each game by integer Id
//title, genre, platform, releaseDate, imageUrl
import { Game } from "../models/index.js"; 

export const seedGame = async () => {
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
        ];
    
}