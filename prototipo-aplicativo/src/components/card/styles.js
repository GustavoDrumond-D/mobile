import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  poster: {
    width: "100%",
    resizeMode: "cover",
  },
  movieTitle: {
    padding: 8,
    color: "#FFD700",
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  posterExpandido: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 5,
    marginBottom: 15,
  },
  movieTitleExpandido: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  detailsSection: {
    marginBottom: 12,
  },
  detailsLabel: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  detailsValue: {
    color: "#ffffff",
    fontSize: 15,
  },
  elencoContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
  atorText: {
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 3,
  },
  plotText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  closeButton: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
    favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
  },
  favoriteIcon: {
    fontSize: 24,
    color: '#FFD700',
  },
});

export default styles;