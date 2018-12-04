var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from "../components/uimod/index";
import { AKCENT, BGDARK } from '../../constants';
import { inject, observer } from "mobx-react";
let ArticleDetails = class ArticleDetails extends Component {
    viewEdit() {
        this.props.store.articleView();
    }
    render() {
        const { btnActive, container, bodys } = styles;
        const { title, body } = this.props.navigation.state.params;
        const { navigation } = this.props;
        return (React.createElement(View, { style: container },
            React.createElement(Header, { detail: true, title: title, leftIcon: 'angle-double-left', headerColor: BGDARK, leftBtnColor: AKCENT, onPress: () => {
                    navigation.goBack();
                    this.viewEdit();
                } }),
            this.props.store.articleEdit ?
                React.createElement(View, null,
                    React.createElement(Text, null, "FALSE")) :
                React.createElement(View, null,
                    React.createElement(Text, null, "TRUE"))));
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
    }
});
export default ArticleDetails;
