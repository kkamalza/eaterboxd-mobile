import { useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popular.style'
import { COLORS, SIZES } from '../../../constants';
import PopularCard from '../../common/cards/popular/PopularCard';
import useFetch from '../../../hook/useFetch';

const Popular = () => {
  const router = useRouter();
  // const isLoading = false;
  // const error = false;
  const {data, isLoading, error } = useFetch ('nearbysearch', {
    location: '-33.8670522,151.1957362',
    radius: '1500',
    keyword: 'cruise',
    type: 'restaurant'}) 

  //const {data, isLoading, error } = useFetch () 

    console.log("TEST" + data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data = {data}
            renderItem={({item}) => (
              <PopularCard
                item={item}
              />
            )}
            keyExtractor={item => item?.place_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popular