import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Fonticon from 'react-native-vector-icons/FontAwesome'
import styles from './Style'

const Header = ({ detail, title, onPress, goBack, leftIcon, leftBtnColor }) => {
  const { viewStyle, textStyle, buttonBack, leftBtnStyle } = styles
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
          <Fonticon name={leftIcon} style={[leftBtnStyle, { paddingLeft: detail ? 10 : 25 }]} color={leftBtnColor} />
      </TouchableOpacity>
      <Text style={[textStyle, { marginLeft: detail ? 150 : 100 }]}>{title}</Text>
    </View>
  )
}

export { Header }
