import { RawgGame } from '../interfaces/RawgGame';

import dotenv from 'dotenv';
dotenv.config();

// class GameAPI {
//   id: number;
//   name: string;
//   description: string;
//   metacritic: number;
//   released: string;
//   background_image: string;
//   website: string;
//   playtime: number;
//   metacritic_url: string;

//   constructor(
//     id: number,
//     name: string,
//     description: string,
//     metacritic: number,
//     released: string,
//     background_image: string,
//     website: string,
//     playtime: number,
//     metacritic_url: string,
//   ) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.metacritic = metacritic;
//     this.released = released;
//     this.background_image = background_image;
//     this.website = website;
//     this.playtime = playtime;
//     this.metacritic_url = metacritic_url;
//   }
// }

class RawgService {

  private REQUEST_URL = 'https://api.rawg.io/api/';
  private API_KEY = process.env.RAWG_API_KEY;

  async getGame(gameId: number) {

    const response = await fetch(`${this.REQUEST_URL}/games/${gameId}?key=${this.API_KEY}`, {
      method: 'GET',
    });

    const game = await response.json();
    console.log(game);
    return JSON.parse(game);

  }

  async getGames() {

    const response = await fetch(`${this.REQUEST_URL}/games?key=${this.API_KEY}`, {
      method: 'GET',
    });

    const games = await response.json();
    // console.log(games);
    return JSON.parse(games);

  }

  async searchGame(gameName: string) {

    const response = await fetch(`${this.REQUEST_URL}/games?${gameName}&key=${this.API_KEY}`, {
      method: 'GET',
    });

    const results = await response.json();
    // console.log(game);
    return JSON.parse(results);

  }

}

const rawgSerivice = new RawgService();
export { rawgSerivice };