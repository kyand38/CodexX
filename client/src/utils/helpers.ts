// this provides functions for getting either comma separated strings, or unordered list items
// to be used to instert html into an html list

import { RawgGame, RawgDevelopmentTeam } from '../interfaces/RawgGame';

export function concatGenres(game: RawgGame): string {
    const genresArray = game.genres.map(g => `${g.name}`);
    const genresString = genresArray.join(', ');
    return genresString;
}

export function listGenres(game: RawgGame): string {
    const genresArray = game.genres.map(g => `<li>${g.name}</li>`);
    const genresString = genresArray.join('');
    return genresString;
}

export function concatPlatforms(game: RawgGame): string {
    const platformArray = game.platforms.map(p => `${p.platform.name}`);
    const platformString = platformArray.join(', ');
    return platformString;
}

export function listPlatforms(game: RawgGame): string {
    const platformArray = game.platforms.map(p => `<li>${p.platform.name}</li>`);
    const platformString = platformArray.join('');
    return platformString;
}

export function concatStores(game: RawgGame): string {
    const storesArray = game.stores.map(s => `${s.store.name}`);
    const storesString = storesArray.join(', ');
    return storesString;
}

export function listStores(game: RawgGame): string {
    const storesArray = game.stores.map(s => `<li>${s.store.name}</li>`);
    const storesString = storesArray.join('');
    return storesString;
}
// this will take a dev team and output something like this:
// Dan Houser - writer | Leslie Benzies - producer, designer | Aaron Garbut - artist | Adam Fowler - programmer | Rupert Humphries - writer | Michael Unsworth - writer
export function listDevelopmentTeam(team: RawgDevelopmentTeam): string {
    console.log(team.count);
    if (team.count > 0) {
        const teamArray = team.results.map(t => `<li>${t.name} -${t.positions.map(p => ` ${p.name}`)}</li>`);
        const teamString = teamArray.join('');
        return teamString;
    } else {
        return "No information found."
    }
}