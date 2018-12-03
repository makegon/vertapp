import React from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";
import {BGDARK, BGBLUE, BGSOFT} from "../../../constants";

const Add = ({ myIcon }) => {
    const { titleLogin, loginCont, addArticle, btnCont, btnText } = styles
    return (
        <View style={loginCont}>
            {myIcon}
            <Text style={titleLogin}>Добавление новой заметки</Text>
            <TextInput
                placeholder="Введите название заметки"
                placeholderTextColor={BGSOFT}
                style={addArticle}
            />
            <TextInput
                placeholder="Содержание заметки"
                placeholderTextColor={BGSOFT}
                style={[addArticle, {height:200, }]}
            />
            <TouchableOpacity style={btnCont}>
                <Text style={btnText}>Сохранить</Text>
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
    addArticle:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: 270,
        marginBottom: 20,
        color: BGBLUE,
        fontFamily: 'AvenirNext-DemiBold',
        paddingHorizontal: 10,
        marginTop: 10,
        fontWeight: '700'
    }
})
export { Add }