import React from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './DetailMovie.styles'
import { useTheme } from '@react-navigation/native'
import Separator from '../../components/Separator'
import ItemGenre from '../../components/ItemGenre'
import { fonts } from '../../styles'

const DATA = [
  {
      id: 7,
      name: "Romance",
      created_at: "2023-12-28T10:11:11.000000Z",
      updated_at: "2023-12-28T10:11:11.000000Z"
  },
  {
      id: 6,
      name: "Music",
      created_at: "2023-12-28T10:11:11.000000Z",
      updated_at: "2023-12-28T10:11:11.000000Z"
  },
  {
      id: 5,
      name: "Biography",
      created_at: "2023-12-28T10:11:11.000000Z",
      updated_at: "2023-12-28T10:11:11.000000Z"
  },
  {
      id: 4,
      name: "Crime",
      created_at: "2023-12-28T10:11:11.000000Z",
      updated_at: "2023-12-28T10:11:11.000000Z"
  },
  {
      id: 3,
      name: "Drama",
      created_at: "2023-12-28T10:11:11.000000Z",
      updated_at: "2023-12-28T10:11:11.000000Z"
  },
  {
      id: 2,
      name: "Adventure",
      created_at: "2023-12-28T10:11:11.000000Z",
      updated_at: "2023-12-28T10:11:11.000000Z"
  },
  {
      id: 1,
      name: "Action",
      created_at: "2023-12-28T10:11:11.000000Z",
      updated_at: "2023-12-28T10:11:11.000000Z"
  }
]


const DetailMovie = (props: any) => {
  console.log('object', props?.route?.params)
  const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.textHeader, color: colors.text }}>{`${props?.route?.params ? 'Detail ' : 'Add '} Movie`}</Text>
      </View>
      <Separator style={{ marginVertical: 10 }} />
      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={{ ...styles.titleInput, color: colors.text }}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder='Title Movie'
            placeholderTextColor='#7C7A7A'
          />
        </View>
        <View style={styles.field}>
          <Text style={{ ...styles.titleInput, color: colors.text }}>Director</Text>
          <TextInput
            style={styles.input}
            placeholder='Title Movie'
            placeholderTextColor='#7C7A7A'
          />
        </View>
        <View style={styles.field}>
          <Text style={{ ...styles.titleInput, color: colors.text }}>Director</Text>
          <TextInput
            multiline={true}
            textAlignVertical="top"
            numberOfLines={4}
            style={styles.input}
            placeholder='Title Movie'
            placeholderTextColor='#7C7A7A'
          />
        </View>
        <FlatList
          data={DATA}
          horizontal
          contentContainerStyle={styles.listGenres}
          renderItem={({item}) => <ItemGenre { ...item } />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#00A3FF' }}>
          <Text style={{ color: colors.text, textAlign: 'center', fontFamily: fonts.bold }}>ADD</Text>
        </TouchableOpacity>
        {props?.route?.params ? (
          <>
            <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#00FFB2' }}>
              <Text style={{ color: colors.text, textAlign: 'center', fontFamily: fonts.bold }}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#FF00B8' }}>
              <Text style={{ color: colors.text, textAlign: 'center', fontFamily: fonts.bold }}>DELETE</Text>
            </TouchableOpacity>
          </>
        ) : null}
        <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#040404' }} onPress={() => props?.navigation.goBack()}>
          <Text style={{ textAlign: 'center', fontFamily: fonts.bold }}>BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailMovie