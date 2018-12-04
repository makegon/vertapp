import React from "react";
import {Text, TextInput, View, TouchableOpacity} from "react-native";
import {BGDARK} from "../../../constants";
import styles from './Style'

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
export { Login }