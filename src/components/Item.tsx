import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { fonts } from '../styles';
import { FlatList } from 'react-native-gesture-handler';
import ItemGenre from './ItemGenre';

type Props = {
  title: string
  image: string
  director: string
  summary: string
  genres: any[]
};

const Item: React.FC<Props> = ({ title, image, director, summary, genres }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity style={styles.item} onPress={() => {}}>
      <Image
        style={styles.imgCover}
        source={{ uri: image }}
      />
      <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
      <Text style={{ ...styles.director, color: colors.text }}>{director}</Text>
      <Text style={{ ...styles.summary, color: colors.text }}>{summary}</Text>
      <FlatList
        data={genres}
        horizontal
        contentContainerStyle={styles.listGenres}
        renderItem={({item}) => <ItemGenre { ...item } />}
        keyExtractor={item => item.id.toString()}
      />
    </TouchableOpacity>
  )
}

export default Item


export const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    gap: 8,
    borderRadius: 10
  },
  imgCover: {
    width: '100%',
    height: 200,
    resizeMode: "contain"
  },
  title: {
    fontFamily: fonts.bold
  },
  director: {
    fontFamily: fonts.regular
  },
  summary: {
    fontFamily: fonts.light
  },
  listGenres: {
    marginTop: 10,
    gap: 10
  }
});