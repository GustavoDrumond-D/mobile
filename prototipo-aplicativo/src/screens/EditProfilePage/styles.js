import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#FFD700',
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1F1F1F',
    color: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  disabledInput: {
    opacity: 0.6,
  },
  saveButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});