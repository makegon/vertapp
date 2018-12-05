import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import {BGDARK, AKCENT, BGSOFT} from '../../../constants'
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './Style'
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {SwitchTab} from './Switch'
import {onSignOut} from "../../auth";
import todelete from "../components/HTTP/delete";

const ImageCard = ({ onValueChange, tintColor, switchState, data, onPress, iconView, onTintColor, thumbTintColor }) => {
  const { container, sub, h1, cover, bodys, btnActive } = styles
  const myIcon = <Icon name={iconView} size={40} color={BGDARK} />

  const { title } = data
  return (
          <View>
              <TouchableOpacity onPress={onPress}>
                  <Card title={title.toUpperCase()}>
                      <View style={sub}>
                          {myIcon}
                      </View>
                      <FormLabel>{title.toUpperCase()}</FormLabel>
                      <FormLabel>Дата добавления 03.12.2018</FormLabel>
                      <SwitchTab
                          onValueChange={onValueChange}
                          tintColor={tintColor}
                          onTintColor={onTintColor}
                          thumbTintColor={thumbTintColor}
                          state={switchState}/>
                  </Card>
              </TouchableOpacity>
          </View>
  )
}

export { ImageCard }
