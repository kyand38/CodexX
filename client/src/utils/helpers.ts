import { RawgGame } from '../interfaces/RawgGame';

export function concatGenres(game: RawgGame) {
    const genresArray = game.genres.map(g => `${g.name}`);
    const genresString = genresArray.join(', ');
    return genresString;
}