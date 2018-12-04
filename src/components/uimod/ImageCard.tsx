import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {BGDARK} from '../../../constants'
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './Style'

const ImageCard = ({ data, onPress, iconView }) => {
  const { container, sub, h1, cover } = styles
  const { title } = data
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={container}>
      <View style={sub}>
          <Icon name={iconView} size={40} color={BGDARK} />
      </View>

      <Text numberOfLines={1} ellipsizeMode='tail' style={h1}>{title.toUpperCase()}</Text>
    </View>
      </TouchableOpacity>
  )
}

export { ImageCard }
