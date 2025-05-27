import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    listContainer: {
        padding: 10,
    },
    loader: {
        flex: 1,
        justifyContent: 'center'
    },
    errorText: {
        color: '#FF4444',
        textAlign: 'center',
        marginTop: 20
    }
    ,
    emptyText: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        gap: 10,
    },
    pageButton: {
        color: '#FFD700',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    pageNumber: {
        color: '#FFF',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    currentPage: {
        color: '#FFD700',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
      searchContainer: {
    padding: 10,
    backgroundColor: '#121212',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#1a1a1a',
    color: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
});