import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from'./Style'
const Layout = props => {
  const { containerLayout } = styles
  return (
    <ScrollView>
      <View style={containerLayout}>
        {props.children}
      </View>
    </ScrollView>
  )
}
export { Layout }
