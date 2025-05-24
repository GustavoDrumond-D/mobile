const API_KEY = '979e5f0b';
const BASE_URL = 'https://www.omdbapi.com/';

/* 
fetchMovies - Esta sendo usada para buscar filmes da API
fetchTotalPages - Esta será usada para buscar o número de páginas da API
*/

export const fetchMovies = async (page = 1, searchTerm = 'action') => {
  try {
    const listResponse = await fetch(
      `${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}&page=${page}`
    );
    const listData = await listResponse.json();

    if (!listData.Search) return [];

    const detailedMovies = await Promise.all(
      listData.Search.map(async (item) => {
        const detailsResponse = await fetch(
          `${BASE_URL}?i=${item.imdbID}&apikey=${API_KEY}`
        );
        return await detailsResponse.json();
      })
    );

    return detailedMovies.map((movie) => ({
      imdbID: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      posterUrl: movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x225?text=No+Poster',
      runtime: movie.Runtime,
      director: movie.Director,
      genres: movie.Genre ? movie.Genre.split(',').map((g) => g.trim()) : [],
      actors: movie.Actors || '',
      plot: movie.Plot || '',
    }));
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};

export const fetchTotalPages = async (searchTerm = 'action') => {
  const response = await fetch(
    `${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return Math.ceil(parseInt(data.totalResults) / 10);
};