import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {BGDARK, w, AKCENT, BGTAP, BGBLUE, BGSOFT} from '../../../constants'
import Icon from "react-native-vector-icons/FontAwesome";

const ImageCard = ({ data, img, onPress, iconView }) => {
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

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10
  },
  sub: {
    width: 70,
    padding: 15,
      borderColor: AKCENT,

    height: 70,
    shadowColor: '#000',
    borderRadius: 100,
    backgroundColor: BGBLUE,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.4,
      alignSelf: 'center'
  },
  h1: {
    padding: 1,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    width: w - 30,
    color: BGBLUE


  },
  cover: {
    width: w / 5.4,
    height: w * 0.13,
    borderRadius: 10
  }
})
export { ImageCard }
