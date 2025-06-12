export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // For poster images
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_KEY =process.env.REACT_APP_TMDB_AUTH_KEY;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`
  }
};

// src/services/tmdbService.js
import axios from "axios";


const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await apiClient.get("/movie/popular", {
      params: { page },
    });
    return response.data; // Contains results, page, total_pages, total_results
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error; // Re-throw to be caught by the component
  }
};

export const getTrendingMovies = async (timeWindow = "day") => {
  // timeWindow can be 'day' or 'week'
  try {
    const response = await apiClient.get(`/trending/movie/${timeWindow}`);
    return response.data.results; // Trending API returns results directly
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// You could add more functions here, e.g., getMovieDetails, searchMovies etc.