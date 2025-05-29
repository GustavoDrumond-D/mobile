import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#000',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
    title: {
    color: '#FFD700',
    fontSize: 30,
    fontFamily: 'Inter-Bold',
  },
  
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
    userIcon: {
    color: '#FFD700',
    fontSize: 28,
  },
  searchIcon: {
    color: '#FFD700',
    fontSize: 28,
  },
    drawerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  drawerContent: {
    backgroundColor: '#1a1a1a',
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: '50%',
    maxHeight: '90%',
  },
  drawerHeader: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  drawerItemText: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
    closeDrawerButton: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeDrawerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
    userMenuItem: {
    paddingVertical: 20,
  },
    mainMenuItem: {
    paddingVertical: 18,
  },
    rightDrawerContent: {
    marginLeft: 'auto',
    width: '80%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  }
});

export default styles;