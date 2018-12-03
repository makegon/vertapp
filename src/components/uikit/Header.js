import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Fonticon from 'react-native-vector-icons/FontAwesome'
import {AKCENT,BGDARK,BGTAP} from '../../../constants'

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

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: BGDARK,
    height: 116,
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  leftBtnStyle:{
    paddingTop: 10,
    fontSize: 55
  },
  textStyle: {
    color: BGTAP,
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 5,

      position:'absolute',
      alignItems: 'center'
  },
    buttonBack: {
    color: AKCENT,
    padding: 1,
    position: 'relative',
        fontSize: 24
    }
})

export { Header }
