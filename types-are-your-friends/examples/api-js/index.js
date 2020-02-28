const express = require("express");
const fetch = require("node-fetch");

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
    return res.json({ show, metadata: buildShowMetadata(show) });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "internal server error"});
  }
});

app.listen(3000, () => console.log('Listening on 3000!'));

/**
 * TMDB API
 */
const TMDB_API_KEY = "874c5d5a093ae7e43035cd9a4bd4939c"; // Fill this in!

function tmdbApiUrl (path, params) {
  return Object.keys(params).reduce((out, k) => {
    return out + `${k}=${params[k]}`;
  }, `https://api.themoviedb.org/3/${path}?api_key=${TMDB_API_KEY}`);
}

// Make http request to tmdb API, returning a specific structure of the data.
async function searchTmdb(query) {
  let resp = await fetch(tmdbApiUrl("search/tv", { query }));
  if (!resp.ok) throw Error("Failed to communicate with TMDB API");

  let body = await resp.json();
  return transformTmdbRecord(body);
}

async function getShow(id) {
  let resp = await fetch(tmdbApiUrl(`tv/${id}`, {}));
  if (!resp.ok) throw Error("Failed to communicate with TMDB API");

  let body = await resp.json();
  return transformTmdbRecord(body);
}

function transformTmdbRecord(show) {
  return {
    id: show.id,
    name: show.name,
    genres: show.genres,
    seasons: show.seasons,
    first_air_date: show.first_air_date,
    popularity: show.popularity
  }
}

function buildShowMetadata(show) {
  return {
    genres: show.genres.map(g => g.name),
    seasons: show.seasons.length,
    episodes: show.seasons.reduce((total, s) => total + s.episode_count, 0),
    firstAirDate: show.first_air_date,
    rating: show.popularity
  };
}