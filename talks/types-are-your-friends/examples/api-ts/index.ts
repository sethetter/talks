import express = require("express");
import fetch = require("node-fetch");
let app = express();

/**
 * Routes
 */

// Searches TMDB for a show matching a query string, returns first result.
app.get("/shows/search", async (req, res) => {
  let q = req.query.query;
  try {
    let show = await searchTmdb(q);
    return res.json(show);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "internal server error"});
  }
});

// Get a show by ID from TMDB API and build metadata object.
app.get("/show/:id/metadata", async (req, res) => {
  let showId = req.params.id;
  try {
    let show = await getShow(showId);

    return res.json({
      name: show.name,
      metadata: buildShowMetadata(show)
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "internal server error"});
  }
});

app.listen(3000, () => console.log('Listening on 3000!'));

/**
 * TMDB API
 */
const TMDB_API_KEY = ""; // Fill this in!

interface Show {
  id: number,
  name: string,
  genres: TmdbGenre[],
  seasons: TmdbSeason[],
  firstAirDate: string,
  popularity: number,
}

interface ShowMetadata {
  genres: string[],
  seasons: number,
  episodes: number,
  rating: number
}

interface TmdbShow {
  id: number,
  name: string,
  seasons: TmdbSeason[],
  genres: TmdbGenre[],
  popularity: number,
  first_air_date: string,
}

interface TmdbSeason {
  number: number,
  episode_count: number,
}

interface TmdbGenre {
  id: number,
  name: string,
}

function tmdbApiUrl (path: string, params: Object): string {
  return Object.keys(params).reduce((out, k) => {
    return out + `${k}=${params[k]}`;
  }, `https://api.themoviedb.org/3/${path}?api_key=${TMDB_API_KEY}`);
}

async function searchTmdb(query: string): Promise<Show> {
  let resp = await fetch(tmdbApiUrl("search/tv", { query }), {});
  if (!resp.ok) throw Error("Failed to communicate with TMDB API");

  let body = await resp.json();
  return transformTmdbRecord(body);
}

async function getShow(id): Promise<Show> {
  let resp = await fetch(tmdbApiUrl(`tv/${id}`, {}), {});
  if (!resp.ok) throw Error("Failed to communicate with TMDB API");

  let body: TmdbShow = await resp.json();
  return transformTmdbRecord(body);
}

function transformTmdbRecord(show: TmdbShow): Show {
  return {
    id: show.id,
    name: show.name,
    genres: show.genres,
    seasons: show.seasons,
    firstAirDate: show.first_air_date,
    popularity: show.popularity
  }
}

function buildShowMetadata(show: Show): ShowMetadata {
  return {
    genres: show.genres.map(g => g.name),
    seasons: show.seasons.length,
    episodes: show.seasons.reduce((total, s) => total + s.episode_count, 0),
    rating: show.popularity
  };
}