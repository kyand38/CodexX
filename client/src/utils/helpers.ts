import { RawgGame, RawgDevelopmentTeam } from '../interfaces/RawgGame';

export function concatGenres(game: RawgGame): string {
    const genresArray = game.genres.map(g => `${g.name}`);
    const genresString = genresArray.join(', ');
    return genresString;
}

export function concatPlatforms(game: RawgGame): string {
    const platformArray = game.platforms.map(p => `${p.platform.name}`);
    const platformString = platformArray.join(', ');
    return platformString;
}

export function concatStores(game: RawgGame): string {
    const storesArray = game.stores.map(s => `${s.store.name}`);
    const storesString = storesArray.join(', ');
    return storesString;
}

// this will take a dev team and output something like this:
// Dan Houser - writer | Leslie Benzies - producer, designer | Aaron Garbut - artist | Adam Fowler - programmer | Rupert Humphries - writer | Michael Unsworth - writer
export function concatDevelopmentTeam(team: RawgDevelopmentTeam): string {
    console.log(team.count);
    if (team.count > 0) {
        const teamArray = team.results.map(t => `<p>${t.name} -${t.positions.map(p => ` ${p.name}`)}</p>`);
        const teamString = teamArray.join('');
        return teamString;
    } else {
        return "No information found."
    }
}