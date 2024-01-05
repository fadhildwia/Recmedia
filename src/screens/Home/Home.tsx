import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { styles } from './Home.styles'
import { Magnify, Plus } from '../../assets/icons'
import Separator from '../../components/Separator'
import Item from '../../components/Item'
import API from '../../utils/axios'
import { useInfiniteQuery, useQuery } from 'react-query'
import { movieAPI } from '../../api'

const DATA = [
  {
    id: 1,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    summary: "A young hobbit, Frodo, who has found the One Ring, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    created_at: "2023-12-28T17:11:11.000000Z",
    updated_at: "2023-12-28T10:11:11.000000Z",
    image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UY2936_.jpg",
    genres: [
        {
            id: 1,
            name: "Action",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 1
            }
        },
        {
            id: 2,
            name: "Adventure",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 2
            }
        },
        {
            id: 3,
            name: "Drama",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 3
            }
        }
    ]
  },
  {
    id: 2,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    summary: "A young hobbit, Frodo, who has found the One Ring, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    created_at: "2023-12-28T17:11:11.000000Z",
    updated_at: "2023-12-28T10:11:11.000000Z",
    image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UY2936_.jpg",
    genres: [
        {
            id: 1,
            name: "Action",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 1
            }
        },
        {
            id: 2,
            name: "Adventure",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 2
            }
        },
        {
            id: 3,
            name: "Drama",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 3
            }
        }
    ]
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    summary: "A young hobbit, Frodo, who has found the One Ring, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    created_at: "2023-12-28T17:11:11.000000Z",
    updated_at: "2023-12-28T10:11:11.000000Z",
    image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UY2936_.jpg",
    genres: [
        {
            id: 1,
            name: "Action",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 1
            }
        },
        {
            id: 2,
            name: "Adventure",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 2
            }
        },
        {
            id: 3,
            name: "Drama",
            created_at: "2023-12-28T10:11:11.000000Z",
            updated_at: "2023-12-28T10:11:11.000000Z",
            pivot: {
                movie_id: 1,
                genre_id: 3
            }
        }
    ]
  },
];



interface Props {
  navigation: any
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme()
  const [search, setSearch] = useState('')

  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    'movie',
    movieAPI.fetchListMovie,
    {getNextPageParam: (lastPage: { next: null }) => {
        if (lastPage.next !== null) {
          return lastPage.next;
        }
  
        return lastPage;
    }}
  )

  console.log(data?.pages)

  return (
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
        data={DATA}
        contentContainerStyle={styles.listMovie}
        renderItem={({item}) => <Item { ...item } />}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity style={styles.btnCreate} onPress={() => navigation.navigate('Detail Movie')}>
        <Plus height={20} style={{ color: '#7C7A7A' } as ViewStyle} width={20} />
      </TouchableOpacity>
    </View>
  )
}

export { Home }