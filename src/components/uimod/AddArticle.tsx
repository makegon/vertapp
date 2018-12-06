import React, { Component } from "react";
import {View} from "react-native";
import {BGSOFT} from "../../../constants";
import styles from './Style'
import {ARTICLE_EDIT} from "../../routes";
import {Card, FormInput, FormLabel, Button} from "react-native-elements";
import {inject, observer} from "mobx-react";
import {onSignOut} from "../../auth";


@inject('store')
@observer
const AddArticle = ({ iconStyle, myIcon, onPress, buttonStyle, onChangeTextTitle, onChangeTextBody }) => {

    return (
        <Card title="Добавить заметку">
            <FormLabel>Название</FormLabel>
            <FormInput
                onChangeText={onChangeTextTitle}
                placeholder="Введите название заметки..."/>
            <FormLabel>Содержание заметки</FormLabel>
            <FormInput
                onChangeText={onChangeTextBody}
                placeholder="Введите содержание..."
            />
            <Button
                title="Сохранить"
                onPress={onPress}
                buttonStyle={buttonStyle}
            />
            <View
                style={iconStyle}>
                {myIcon}
            </View>
        </Card>
    )
}

export { AddArticle }

