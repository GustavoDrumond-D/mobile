import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Inter_300Light,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import FilmeCard from "./components/card";
import dados from "./db.json";
import NavBar from "./components/navbar";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": Inter_300Light,
    "Inter-Bold": Inter_700Bold,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [runtimeFilter, setRuntimeFilter] = useState(300);
  const [yearRange, setYearRange] = useState([1930, 2023]);
  const [searchDirector, setSearchDirector] = useState("");
  const [searchActor, setSearchActor] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [showExtraFilters, setShowExtraFilters] = useState(false);

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 40) / 3;

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  const uniqueYears = [
    "all",
    ...new Set(dados.movies.map((movie) => movie.year)),
  ].sort();

  const filteredMovies = dados.movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === "all" || movie.year === selectedYear;
    const matchesRuntime = parseInt(movie.runtime) <= runtimeFilter;
    const matchesYearRange =
      parseInt(movie.year) >= yearRange[0] &&
      parseInt(movie.year) <= yearRange[1];

    const matchesDirector = movie.director
      .toLowerCase()
      .includes(searchDirector.toLowerCase());
    const matchesActor = movie.actors
      .toLowerCase()
      .includes(searchActor.toLowerCase());
    const matchesRating = movie.rating
      .toString()
      .includes(searchRating.toLowerCase());

    return (
      matchesSearch &&
      matchesYear &&
      matchesRuntime &&
      matchesYearRange &&
      matchesDirector &&
      matchesActor &&
      matchesRating
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Catálogo de Filmes</Text>
        </View>

        <TouchableOpacity
          style={styles.toggleFiltersButton}
          onPress={() => setShowExtraFilters(!showExtraFilters)}
        >
          <Text style={styles.toggleFiltersText}>
            {showExtraFilters ? "Ocultar filtros ▲" : "Mais filtros ▼"}
          </Text>
        </TouchableOpacity>

        {showExtraFilters && (
          <>
            <View style={styles.filtersContainer}>
              <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Pesquisar por título..."
              />

              <SearchBar
                value={searchDirector}
                onChangeText={setSearchDirector}
                placeholder="Filtrar por diretor..."
              />

              <SearchBar
                value={searchActor}
                onChangeText={setSearchActor}
                placeholder="Filtrar por ator..."
              />

              <SearchBar
                value={searchRating}
                onChangeText={setSearchRating}
                placeholder="Filtrar por avaliação (ex: 4.5)"
                keyboardType="numeric"
              />

              <View style={styles.filterGroup}>
                <Text style={styles.filterLabel}>Ano:</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={selectedYear}
                    onValueChange={(itemValue) => setSelectedYear(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#FFD700"
                  >
                    <Picker.Item label="Todos os anos" value="all" />
                    {uniqueYears.map((year) => (
                      <Picker.Item key={year} label={year} value={year} />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.filterGroup}>
                <Text style={styles.filterLabel}>
                  Duração máxima: {runtimeFilter} min
                </Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={300}
                  step={15}
                  value={runtimeFilter}
                  onValueChange={setRuntimeFilter}
                  minimumTrackTintColor="#FFD700"
                  maximumTrackTintColor="#333"
                  thumbTintColor="#FFD700"
                />
              </View>

              <View style={styles.filterGroup}>
                <Text style={styles.filterLabel}>
                  Anos: {yearRange[0]} - {yearRange[1]}
                </Text>
                <Slider
                  style={styles.slider}
                  minimumValue={1930}
                  maximumValue={2023}
                  step={1}
                  value={yearRange[1]}
                  onValueChange={(value) => setYearRange([yearRange[0], value])}
                  minimumTrackTintColor="#FFD700"
                  maximumTrackTintColor="#333"
                  thumbTintColor="#FFD700"
                />
                <Slider
                  style={styles.slider}
                  minimumValue={1930}
                  maximumValue={2023}
                  step={1}
                  value={yearRange[0]}
                  onValueChange={(value) => setYearRange([value, yearRange[1]])}
                  minimumTrackTintColor="#FFD700"
                  maximumTrackTintColor="#333"
                  thumbTintColor="#FFD700"
                />
              </View>
            </View>
          </>
        )}

        <NavBar />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.gridContainer}>
          {filteredMovies.map((filme) => (
            <View
              key={filme.id}
              style={[styles.cardWrapper, { width: cardWidth }]}
            >
              <FilmeCard filme={filme} cardWidth={cardWidth} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  header: {
    paddingTop: 35,
    paddingHorizontal: 10,
    backgroundColor: "#121212",
    zIndex: 100,
  },
  titleContainer: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 8,
    marginBottom: 5,
  },
  title: {
    color: "#FFD700",
    fontSize: 20,
    fontFamily: "Inter-Bold",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
  },
  scrollContent: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    marginBottom: 15,
    aspectRatio: 0.67,
  },
  filtersContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
  },
  filterGroup: {
    marginBottom: 15,
  },
  filterLabel: {
    color: "#FFD700",
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "Inter-Bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
  },
  picker: {
    height: 40,
    color: "#FFF",
    backgroundColor: "#1a1a1a",
  },
  slider: {
    width: "100%",
    height: 40,
  },
});
