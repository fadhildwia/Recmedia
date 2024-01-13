import React, { useEffect, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { styles } from './Home.styles'
import { Magnify, Plus } from '../../assets/icons'
import Separator from '../../components/Separator'
import Item from '../../components/Item'
import { useInfiniteQuery } from 'react-query'
import { movieAPI } from '../../api'

interface Props {
  navigation: any
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme()
  const [search, setSearch] = useState('')

  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    'movie',
    movieAPI.fetchListMovie,
    {
      getNextPageParam: (lastPage) => {
        // console.log('lastPage:', lastPage);
        if (lastPage.next_page_url !== null) {
          return lastPage.pageParam + 1
        }
      },
    }
  );

  return (
    isLoading ? (
      <View>
        <Text>Loading</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ ...styles.textHeader, color: colors.text }}>Movies Colletion</Text>
        </View>
        <View style={styles.search}>
          <Magnify height={20} style={{ color: '#7C7A7A' } as ViewStyle} width={20} />
          <TextInput
            style={{ color: '#7C7A7A', marginRight: 28 }}
            placeholder='Search product'
            placeholderTextColor='#7C7A7A'
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <Separator style={{ marginVertical: 10 }} />
        <FlatList
          data={data?.pages.flatMap((page) => page.data) || []}
          contentContainerStyle={styles.listMovie}
          renderItem={({item}) => <Item { ...item } />}
          keyExtractor={item => item?.id?.toString()}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
        />
        <TouchableOpacity style={styles.btnCreate} onPress={() => navigation.navigate('Detail Movie')}>
          <Plus height={20} style={{ color: '#7C7A7A' } as ViewStyle} width={20} />
        </TouchableOpacity>
      </View>
    )
  )
}

export { Home }