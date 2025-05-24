import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#000',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FFD700',
    fontSize: 30,
    fontFamily: 'Inter-Bold',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  userIcon: {
    color: '#FFD700',
    fontSize: 30,
    marginRight: 10,
  },
  searchIcon: {
    color: '#FFD700',
    fontSize: 30,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menu: {
    width: '70%',
    backgroundColor: '#1a1a1a',
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuTitle: {
    color: '#FFD700',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;