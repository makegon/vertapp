var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Header, SwitchTab } from "../components/uimod/index";
import { AKCENT, BGBLUE, BGDARK, BGSOFT } from '../../constants';
import { Button, FormInput, FormLabel } from "react-native-elements";
import { APP_HOME } from "../routes";
import styles from '../components/uimod/Style';
import { inject, observer } from "mobx-react";
import { deleteart, updateart } from '../components/HTTP/http';
let ArticleDetails = class ArticleDetails extends Component {
    constructor(props) {
        super(props);
        this._onChangeText = text => {
            const body = text;
            this.setState({
                body: body
            });
        };
        this._onChangeTitle = text => {
            const title = text;
            this.setState({
                title: title
            });
        };
        this._onChangeSwitch = () => {
            const done = !this.props.store.switchEdit;
            this.setState({
                done: done
            });
        };
        this.sendData = id => {
            const body = this.state.body;
            const title = this.state.title;
            const done = this.state.done;
            const sData = {
                title: title,
                body: body,
                done: done,
                id: id
            };
            updateart(sData);
        };
        this.state = {
            title: '',
            body: '',
            done: '',
            id: ''
        };
    }
    viewEdit() {
        this.props.store.articleView();
    }
    onDelete(id) {
        deleteart(`http://10.102.100.121:3000/api/tasks/${id}?access_token=${this.props.store.token}`)
            .then(response => {
            console.warn('URLDEL УСПЕШНО');
            this.props.navigation.goBack();
        });
    }
    render() {
        const { btnActive, btnSigh, h1Article, h2Article, containerArticle, bodys } = styles;
        const item = this.props.navigation.state.params;
        const { title, body, id, done } = item;
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
                            "ID \u0437\u0430\u043C\u0435\u0442\u043A\u0438 ",
                            id),
                        React.createElement(Button, { buttonStyle: btnActive, title: this.props.store.btnEdit, onPress: () => {
                                this.viewEdit();
                            } }),
                        React.createElement(Button, { buttonStyle: btnSigh, textStyle: { color: BGSOFT }, title: this.props.store.btnDrop, onPress: () => this.onDelete(id) })))
                : React.createElement(ScrollView, null,
                    React.createElement(View, { style: bodys },
                        React.createElement(FormLabel, null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                        React.createElement(FormInput, { onChangeText: this._onChangeTitle, value: title }),
                        React.createElement(FormLabel, null, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438"),
                        React.createElement(FormInput, { onChangeText: this._onChangeText, value: body }),
                        React.createElement(SwitchTab, { onValueChange: () => {
                                this._onChangeSwitch(done);
                            }, state: done, onTintColor: AKCENT, thumbTintColor: BGDARK, tintColor: BGBLUE }),
                        React.createElement(Button, { buttonStyle: btnActive, title: this.props.store.btnSave, onPress: () => {
                                navigation.navigate(APP_HOME);
                                this.viewEdit();
                                this.sendData(id);
                            } })))));
    }
};
ArticleDetails = __decorate([
    inject('store'),
    observer,
    __metadata("design:paramtypes", [Object])
], ArticleDetails);
export default ArticleDetails;
