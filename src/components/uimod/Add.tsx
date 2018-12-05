import React, { Component } from "react";
import {Text, TextInput, View, TouchableOpacity, Button} from "react-native";
import {BGSOFT} from "../../../constants";
import styles from './Style'
import {ARTICLE_EDIT} from "../../routes";

const Add = ({ myIcon, onPress }) => {

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
            <TouchableOpacity onPress={onPress} style={btnCont}>
                <Text style={btnText}>Сохранить</Text>
            </TouchableOpacity>
        </View>
    )
}

export { Add }

