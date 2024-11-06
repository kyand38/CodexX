export interface RawgGame {
    id: number;
    name: string;
    description: string;
    metacritic: number;
    released: string;
    background_image: string;
    website: string;
    playtime: number;

    platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
            image: string;
            year_end: number;
            year_start: number;
            games_count: number;
            image_background: string;
        }[];
        released_at: string;
        requirements: {};
    };

    stores: {
			id: number;
			url: string;
			store: {
				id: number;
				name: string;
				slug: string;
				domain: string;
				games_count: number;
				image_background: string;
			};
    }[];

    // TODO: build developers object
    // developers: string[];

    genres: {
        id: number;
        name: string;
        games_count: number;
        image_background: string;
    }[];

    publishers: string[];
    esrb_rating: string;
}

export interface RawgGames {
    count: number;              // number of results
    next: string | null;        // link to api call for next page of results, null if on last page
    previous: string | null;    // link to previous page, null if on page 1
    results: RawgGame[];        // array of game objects
}