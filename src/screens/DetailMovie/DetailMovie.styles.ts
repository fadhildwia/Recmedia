import { StyleSheet } from 'react-native';
import { fonts } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 30
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
  form: {
    flexDirection: 'column',
    gap: 20
  },
  field: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  titleInput: {
    fontFamily: fonts.bold,
    fontSize: 18
  },
  input: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    textAlign: 'center',
    color: '#7C7A7A'
  },
  listGenres: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10
  },
  wrapperBtn: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  btn: {
    borderRadius: 10,
    padding: 10,
    width: 100
  }
});