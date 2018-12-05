import React, { Component } from "react";
import {View, Button} from "react-native";
import {BGSOFT} from "../../../constants";
import styles from './Style'
import {ARTICLE_EDIT} from "../../routes";
import {Card, FormInput, FormLabel} from "react-native-elements";
import {inject, observer} from "mobx-react";
import {onSignOut} from "../../auth";


@inject('store')
@observer
const AddArticle = ({ iconStyle, myIcon, onPress, buttonStyle }) => {

    return (
        <Card title="Добавить заметку">
            <FormLabel>Название</FormLabel>
            <FormInput placeholder="Введите название заметки..."/>
            <FormLabel>Содержание заметки</FormLabel>
            <FormInput secureTextEntry placeholder="Введите содержание..."/>
            <Button
                title="СОХРАНИТЬ"
                onPress={onPress}
            />
            <View
                style={iconStyle}>
                {myIcon}
            </View>
        </Card>
    )
}

export { AddArticle }

