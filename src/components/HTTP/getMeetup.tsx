import React, {Component} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import { Header, ImageCard, Layout} from '../components/uimod/index'
import axios from 'axios'



//const url = 'http://10.102.100.121:3000/api/tasks?access_token=vlKd3hoPHZxLojCGSasWeaFi1Kw7G6SDnL1vm5PKmqyjyfHVGeeaEic0UAbGb06S'
componentDidMount = async () => {
    try {
        const response = await fetch(this.props.store.urlHTTP)
        const data = await response.json()
        this.setState({ data })
    } catch (e) {
        throw e
    }
}

const GetMettup = ({ detail, title, onPress, goBack, leftIcon, leftBtnColor }) => {


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



