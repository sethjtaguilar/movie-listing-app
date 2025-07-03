import axios from 'axios'
import type { MovieSearchResponse } from '@/types/movie'

const API_BASE = 'https://jsonmock.hackerrank.com/api/movies/search'

export const movieService = {
  async searchMovies(title: string = '', page: number = 1): Promise<MovieSearchResponse> {
    try {
      const response = await axios.get(API_BASE, {
        params: { Title: title, page }
      });

      return {
        Search: response.data.data.map((movie: { Title: string; Year: number; imdbID: string }) => ({
          Title: movie.Title,
          Year: movie.Year.toString(),
          imdbID: movie.imdbID,
          // Add empty Poster and Type if needed
          Poster: '',
          Type: 'movie'
        })),
        totalResults: response.data.total.toString(),
        Response: "True",
        Error: undefined
      } as MovieSearchResponse;
    } catch (error) {
      console.error('API Error:', error);
      throw new Error('Failed to fetch movies');
    }
  }
}
