import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const restaurantTypes = ["Fast Food", "Fine Dining", "Casual", "Food Trucks"];

const Welcome = () => {
  const router = useRouter();
  const[activeRestaurantType, setActiveRestaurantType] = useState('Fast Food')

  return ( 
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Kaveh</Text>
        <Text style={styles.welcomeMessage}>Find Restaurants</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
           <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View> 

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>
        <FlatList
          data={restaurantTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeRestaurantType, item)}
              onPress={() => {
                setActiveRestaurantType(item);
                router.push('/search/${item}')
              }}
            >
              <Text style={styles.tabText(activeRestaurantType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome