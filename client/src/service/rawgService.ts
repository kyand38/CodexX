// Basic usage here:
// For each category, like games, creators, publishers, etc. there will be three functions:
// 
//  getGame(id: number)                       - returns one specific game object
//  getGames(perPage: number, page: number)   - returns an array of game objects
//  searchGames(game: string)                 - returns an array of game objects, or one game object
//
// Other categories will work similarily, getCreator, getCreators, searchCreators

import {
  RawgCreator,
  RawgGame,
  RawgGames,
  RawgCreators,
  RawgPublisher,
  RawgPublishers,
  RawgDeveloper,
  RawgDevelopers
} from '../interfaces/RawgGame';

import dotenv from 'dotenv';
dotenv.config();

class RawgService {

  private REQUEST_URL = 'https://api.rawg.io/api/';
  private API_KEY = process.env.RAWG_API_KEY;

  // --------------GAMES BEGIN-----------------
  async getGame(id: number): Promise<RawgGame> {
    const response = await fetch(`${this.REQUEST_URL}/games/${id}?key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async getGames(perPage: number, page: number): Promise<RawgGames> {
    const response = await fetch(`${this.REQUEST_URL}/games?page=${page}&page_size=${perPage}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async searchGame(gameName: string): Promise<RawgGames | RawgGame> {
    const response = await fetch(`${this.REQUEST_URL}/games?search=${gameName}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }
  // ----------------GAMES END-----------------------

  // ------------------CREATORS BEGIN----------------
  async getCreators(perPage: number, page: number): Promise<RawgCreators> {
    const response = await fetch(`${this.REQUEST_URL}/creators?page=${page}&page_size=${perPage}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async searchCreator(name: string): Promise<RawgCreator | RawgCreators> {
    const response = await fetch(`${this.REQUEST_URL}/creators?search=${name}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async getCreator(id: number): Promise<RawgCreator> {
    const response = await fetch(`${this.REQUEST_URL}/creators/${id}?key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }
  // -------------------CREATORS END-----------------------

  // -------------------PUBLISHERS BEGIN-------------------
  async getPublishers(perPage: number, page: number): Promise<RawgPublishers> {
    const response = await fetch(`${this.REQUEST_URL}/publishers?page=${page}&page_size=${perPage}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async searchPublisher(name: string): Promise<RawgPublisher | RawgPublishers> {
    const response = await fetch(`${this.REQUEST_URL}/publisher?search=${name}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async getPublisher(id: number): Promise<RawgPublisher> {
    const response = await fetch(`${this.REQUEST_URL}/creators/${id}?key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }
  // -------------------PUBLISHERS END---------------------

  // --------------DEVELOPERS BEGIN---------------------------
  async getDevelopers(perPage: number, page: number): Promise<RawgDevelopers> {
    const response = await fetch(`${this.REQUEST_URL}/developers?page=${page}&page_size=${perPage}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async searchDevelopers(name: string): Promise<RawgDeveloper | RawgDevelopers> {
    const response = await fetch(`${this.REQUEST_URL}/developers?search=${name}&key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }

  async getDeveloper(id: number): Promise<RawgDeveloper> {
    const response = await fetch(`${this.REQUEST_URL}/developers/${id}?key=${this.API_KEY}`, {
      method: 'GET',
    });
    const data = await response.json();
    return JSON.parse(data);
  }
  // ----------------DEVELOPERS END----------------------
}

const rawgSerivice = new RawgService();
export { rawgSerivice };