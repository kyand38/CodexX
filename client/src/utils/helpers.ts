import { RawgGame, RawgDevelopmentTeam } from '../interfaces/RawgGame';

export function concatGenres(game: RawgGame): string {
    const genresArray = game.genres ? game.genres.map(g => `${g.name}`) : [];
    return genresArray.join(', ') || 'N/A'; // Default to 'N/A' if no genres
}

export function concatPlatforms(game: RawgGame): string {
    const platformArray = game.platforms ? game.platforms.map(p => `${p.platform.name}`) : [];
    return platformArray.join(', ') || 'N/A'; // Default to 'N/A' if no platforms
}

export function concatStores(game: RawgGame): string {
    const storesArray = game.stores ? game.stores.map(s => `${s.store.name}`) : [];
    return storesArray.join(', ') || 'N/A'; // Default to 'N/A' if no stores
}

// Concatenate development team details with position names
export function concatDevelopmentTeam(team: RawgDevelopmentTeam): string {
    const teamArray = team.results
        ? team.results.map(t => `${t.name} -${t.positions ? t.positions.map(p => ` ${p.name}`).join(', ') : ''}`)
        : [];
    return teamArray.join(' | ') || 'No team information available'; // Default if no team info
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