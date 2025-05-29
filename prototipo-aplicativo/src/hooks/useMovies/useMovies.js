import { useState, useEffect } from 'react';
import { fetchMovies, fetchTotalPages } from '../../services/api';

export const useMovies = (page = 1) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [moviesData, total] = await Promise.all([
          fetchMovies(page),
          fetchTotalPages()
        ]);
        setMovies(moviesData);
        setTotalPages(total);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page]);

  return { movies, loading, totalPages };
};