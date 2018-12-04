import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Card, Button} from "react-native-elements";
import {AKCENT, BGBLUE, BGDARK, BGSOFT, BGTAP} from '../../constants'
import Icon from "react-native-vector-icons/FontAwesome";
import { onSignOut } from '../auth'

export default ({ navigation }) => {
    const { authHome, bodys, btnActive, akcentEye, iconA } = styles
    const myIcon = (<Icon style={iconA} name="user-secret" size={100} color={BGDARK} />)
    const userName: string = "Александр";
    const btnName: string = "ВЫЙТИ";
    return(
        <View style={authHome}>
            <Card
                title={userName}>
                <View style={bodys}>
                    <View style={akcentEye}/>
                    {myIcon}
                </View>
                <Button
                    buttonStyle={btnActive}
                    title={btnName}
                    onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
                />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    authHome: {
        backgroundColor: BGSOFT,
        flex: 1,
        paddingVertical: 20

    },
    iconA:{
        borderRadius: 40
    },
    btnActive:{
        marginTop: 20,
        backgroundColor: BGDARK
    },
    container:{
        backgroundColor: '#fff',
        flex: 1
    },
    bodys:{
        alignItems: "center",
        backgroundColor: BGBLUE,
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: "center",
        marginBottom: 20

    },
    akcentEye:{
        position:'absolute',
        width: 35,
        height: 35,
        borderRadius: 40,
        backgroundColor: AKCENT,
        marginTop: 10


    }

})

