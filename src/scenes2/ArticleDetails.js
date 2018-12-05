var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Header } from "../components/uimod/index";
import { AKCENT, BGDARK, BGSOFT } from '../../constants';
import { Button, FormInput, FormLabel } from "react-native-elements";
import styles from '../components/uimod/Style';
import { inject, observer } from "mobx-react";
import todelete from "../components/HTTP/delete";
let ArticleDetails = class ArticleDetails extends Component {
    constructor() {
        super(...arguments);
        this._onChangeText = text => {
            console.warn('text', text);
        };
    }
    viewEdit() {
        this.props.store.articleView();
    }
    onDelete(id) {
        todelete(`http://10.102.100.121:3000/api/tasks/${id}?access_token=${this.props.store.token}`)
            .then(response => {
            console.warn('URLDEL УСПЕШНО');
            this.props.navigation.goBack();
        });
    }
    render() {
        const { btnActive, btnSigh, h1Article, h2Article, containerArticle, bodys } = styles;
        const item = this.props.navigation.state.params;
        const { title, body, id } = item;
        const { navigation } = this.props;
        return (React.createElement(View, { style: containerArticle },
            React.createElement(Header, { detail: true, title: title, leftIcon: 'angle-double-left', headerColor: BGDARK, leftBtnColor: AKCENT, onPress: () => {
                    {
                        this.props.store.articleEdit ?
                            navigation.goBack() :
                            this.viewEdit();
                    }
                } }),
            this.props.store.articleEdit
                ? React.createElement(ScrollView, null,
                    React.createElement(View, { style: bodys },
                        React.createElement(Text, { style: h1Article }, title),
                        React.createElement(Text, { style: h2Article }, body.replace(/<[^>]+>/g, '')),
                        React.createElement(Text, null,
                            "ID \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
                            id),
                        React.createElement(Button, { buttonStyle: btnActive, title: this.props.store.btnEdit, onPress: () => {
                                this.viewEdit();
                            } }),
                        React.createElement(Button, { buttonStyle: btnSigh, textStyle: { color: BGSOFT }, title: this.props.store.btnDrop, onPress: () => this.onDelete(id) })))
                : React.createElement(ScrollView, null,
                    React.createElement(View, { style: bodys },
                        React.createElement(FormLabel, null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                        React.createElement(FormInput, { onChangeText: this._onChangeText, placeholder: title }),
                        React.createElement(FormLabel, null, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438"),
                        React.createElement(FormInput, { onChangeText: this._onChangeText, placeholder: body }),
                        React.createElement(Button, { buttonStyle: btnActive, title: this.props.store.btnSave, onPress: () => {
                                console.warn('Title');
                            } })))));
    }
};
ArticleDetails = __decorate([
    inject('store'),
    observer
], ArticleDetails);
export default ArticleDetails;
