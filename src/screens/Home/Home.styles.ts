import { StyleSheet } from 'react-native';
import { fonts } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F4F4F4'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 14
  },
  textHeader: {
    fontFamily: fonts.bold,
    fontSize: 20
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  listMovie: {
    paddingBottom: 20
  },
  btnCreate: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#7C7A7A',
    borderRadius: 100,
    padding: 15,
  }
});