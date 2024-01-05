import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { fonts } from '../styles';

type Props = {
  name: string
};

const ItemGenre: React.FC<Props> = ({ name }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity style={styles.item} onPress={() => {}}>
      <Text style={{ ...styles.text, color: colors.text }}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ItemGenre


export const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#7C7A7A'
  },
  text: {
    fontFamily: fonts.regular
  },
});