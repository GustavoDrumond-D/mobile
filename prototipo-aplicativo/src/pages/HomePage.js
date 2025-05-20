import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Dimensions,
} from 'react-native';
import { useFonts, Inter_300Light, Inter_700Bold } from '@expo-google-fonts/inter';
import FilmeCard from '../components/card';
import NavBar from '../components/NavBar'; // importando NavBar

const apikey = '979e5f0b';

export default function HomePage() {
    let [fontsLoaded] = useFonts({
        'Inter-Light': Inter_300Light,
        'Inter-Bold': Inter_700Bold,
    });

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://www.omdbapi.com/?s=action&apikey=${apikey}&page=${page}`);
                const data = await response.json();

                if (data.Search) {
                    const detailedMovies = await Promise.all(
                        data.Search.map(async (item) => {
                            const res = await fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=${apikey}`);
                            return await res.json();
                        })
                    );

                    const formatted = detailedMovies.map((movie) => ({
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

                    setMovies(formatted);
                    setTotalPages(Math.ceil(parseInt(data.totalResults) / 10));
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [page]);

    const getPageNumbers = () => {
        const visiblePages = 5;
        let start = Math.max(page - Math.floor(visiblePages / 2), 1);
        let end = start + visiblePages - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(end - visiblePages + 1, 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    if (!fontsLoaded || loading) {
        return <ActivityIndicator size="large" color="#FFD700" style={{ flex: 1, justifyContent: 'center' }} />;
    }

    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <NavBar />
            <ScrollView style={styles.content}>
                <View style={styles.listContainer}>
                    {movies.map((filme) => (
                        <FilmeCard key={filme.imdbID} filme={filme} cardWidth={screenWidth - 20} />
                    ))}
                </View>

                <View style={styles.pagination}>
                    {page > 1 && (
                        <Text style={styles.pageButton} onPress={() => setPage(page - 1)}>⬅</Text>
                    )}

                    {getPageNumbers().map((p) => (
                        <Text
                            key={p}
                            style={[styles.pageNumber, p === page && styles.currentPage]}
                            onPress={() => setPage(p)}
                        >
                            {p}
                        </Text>
                    ))}

                    {page < totalPages && (
                        <Text style={styles.pageButton} onPress={() => setPage(page + 1)}>➡</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    content: {
        flex: 1,
        paddingTop: 10,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingVertical: 15,
        gap: 10,
    },
    pageButton: {
        color: '#FFD700',
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        marginHorizontal: 5,
    },
    pageNumber: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Inter-Light',
        marginHorizontal: 5,
    },
    currentPage: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#FFD700',
    },
});
