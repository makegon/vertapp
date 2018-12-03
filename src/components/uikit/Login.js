import React from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";
import {BGDARK, BGBLUE} from "../../../constants";

const Login = ({ myIcon }) => {
    const { titleLogin, loginCont, inputForm, btnCont, btnText } = styles
    return (
        <View style={loginCont}>
                {myIcon}
                <Text style={titleLogin}>Введите данные для входа</Text>
                <TextInput
                    placeholder="Введите email"
                    placeholderTextColor={BGDARK}
                    style={inputForm}
                />
                <TextInput
                    placeholder="Введите пароль"
                    placeholderTextColor={BGDARK}
                    secureTextEntry
                    style={inputForm}
                />
                <TouchableOpacity style={btnCont}>
                    <Text style={btnText}>ВОЙТИ</Text>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btnText:{
        color: BGBLUE,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '700'

    },
    btnCont:{
        paddingVertical: 10,
        backgroundColor: BGDARK,
        width: 100,
        height: 40,
        alignItems: 'center',
        borderRadius: 10

    },
    titleLogin:{
        color: BGBLUE
    },
    loginCont:{
        padding:20,
        alignItems:'center',
        flexGrow:1,
        justifyContent: 'center'
    },
    inputForm:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 270,
        marginBottom: 20,
        color: BGDARK,
        fontFamily: 'AvenirNext-DemiBold',
        paddingHorizontal: 10,
        marginTop: 10,
        fontWeight: '700'
    }
})
export { Login }