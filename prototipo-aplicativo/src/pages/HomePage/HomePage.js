import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator, Dimensions,} from 'react-native';
import { useFonts, Inter_300Light, Inter_700Bold } from '@expo-google-fonts/inter';
import { fetchMovies, fetchTotalPages } from '../../services/api';
import FilmeCard from '../../components/card/card';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

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
        const loadData = async () => {
            try {
                setLoading(true);
                const [moviesData, total] = await Promise.all([
                    fetchMovies(page),
                    fetchTotalPages()
                ]);
                setMovies(moviesData);
                setTotalPages(total);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
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
                        <Text key={p} style={[styles.pageNumber, p === page && styles.currentPage]} onPress={() => setPage(p)}>
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

