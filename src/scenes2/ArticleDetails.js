var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Header } from "../components/uimod/index";
import { AKCENT, BGDARK, BGSOFT } from '../../constants';
import { Button } from "react-native-elements";
import { ARTICLE_EDIT } from "../routes";
import { inject, observer } from "mobx-react";
let ArticleDetails = class ArticleDetails extends Component {
    render() {
        const { btnActive, btnSigh, h1, h2, container, bodys } = styles;
        const item = this.props.navigation.state.params;
        const { title, body } = item;
        const { navigation } = this.props;
        return (React.createElement(View, { style: container },
            React.createElement(Header, { detail: true, title: title, leftIcon: 'angle-double-left', headerColor: BGDARK, leftBtnColor: AKCENT, onPress: () => navigation.goBack() }),
            React.createElement(ScrollView, null,
                React.createElement(View, { style: bodys },
                    React.createElement(Text, { style: h1 }, title),
                    React.createElement(Text, { style: h2 }, body.replace(/<[^>]+>/g, '')),
                    React.createElement(Button, { buttonStyle: btnActive, title: this.props.store.btnEdit, onPress: () => navigation.navigate(ARTICLE_EDIT, (item)) }),
                    React.createElement(Button, { buttonStyle: btnSigh, textStyle: { color: BGSOFT }, title: this.props.store.btnDrop, onPress: () => navigation.navigate(ARTICLE_EDIT, (item)) })))));
    }
};
ArticleDetails = __decorate([
    inject('store'),
    observer
], ArticleDetails);
const styles = StyleSheet.create({
    btnActive: {
        marginTop: 20,
        backgroundColor: BGDARK
    },
    h1: {
        padding: 15,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 26,
        alignSelf: 'center',
        textAlign: 'center'
    },
    h2: {
        paddingHorizontal: 15,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        color: '#424242',
        alignSelf: 'center',
        textAlign: 'center'
    },
    container: {
        backgroundColor: '#fff'
    },
    bodys: {
        alignItems: "center",
        flex: 1,
        marginBottom: 150,
        backgroundColor: "#fff"
    },
    btnSigh: {
        marginTop: 20,
        backgroundColor: "transparent"
    }
});
export default ArticleDetails;
