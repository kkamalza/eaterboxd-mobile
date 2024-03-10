import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'

import styles from './popularcard.style'

const PopularCard = ({ item, selectedRest, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedRest, item)}
    onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedRest, item)}>
        <Image 
          source={{uri: item.icon}}
          resizeMode="contain"
          style={styles.logoImage} 
        />
      </TouchableOpacity>
      <Text style={styles.restName} numberOfLines={1}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default PopularCard