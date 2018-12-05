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
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header, ImageCard, Layout } from '../components/uimod/index';
import { ARTICLE_DETAILS } from "../routes";
import { BGSOFT, BGDARK, BGBLUE, AKCENT } from '../../constants';
import { inject, observer } from "mobx-react";
import load from '../components/HTTP/load';
import switcharticle from '../components/HTTP/switcharticle';
let HomeScreen = class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.loadData();
    }
    loadData() {
        load(this.props.store.urlHTTP)
            .then(response => {
            this.setState({
                data: JSON.parse(response)
            });
            this.props.store.switchDone(this.state.data.done);
        });
    }
    gettingTitle(title) {
        this.props.store.getTitle(title);
    }
    switchart(data) {
        switcharticle(data);
    }
    render() {
        const title = this.props.store.titleHead;
        const iconView = this.props.store.iconNote;
        const { bodyHome } = styles;
        const { data } = this.state;
        const { navigation } = this.props;
        return (React.createElement(View, { style: bodyHome },
            React.createElement(Header, { title: title }),
            React.createElement(ScrollView, null,
                React.createElement(Layout, null, data.map(item => (React.createElement(ImageCard, { onValueChange: () => {
                        this.switchart(item.done);
                    }, switchState: item.done, onTintColor: AKCENT, thumbTintColor: BGDARK, tintColor: BGBLUE, iconView: iconView, data: item, key: item.id, onPress: () => {
                        navigation.navigate(ARTICLE_DETAILS, (item));
                    } })))))));
    }
};
HomeScreen = __decorate([
    inject('store'),
    observer,
    __metadata("design:paramtypes", [Object])
], HomeScreen);
export default HomeScreen;
const styles = StyleSheet.create({
    bodyHome: {
        backgroundColor: BGSOFT,
        flex: 1
    }
});
