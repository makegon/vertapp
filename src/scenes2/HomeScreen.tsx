import React, {Component} from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'
import { Header, ImageCard, Layout } from '../components/uimod/index'
import {ARTICLE_DETAILS} from "../routes";
import {BGSOFT} from '../../constants'
import {inject, observer} from "mobx-react";
import load from '../components/HTTP/load'
@inject('store')
@observer
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.loadData();
    }
    loadData() {
        load (this.props.store.urlHTTP)
            .then(response=> {
                this.setState({
                    data: JSON.parse(response)
                });
            });

    }
    gettingTitle(title) {
        this.props.store.getTitle(title);
    }
    render() {
        const title = this.props.store.titleHead
        const iconView = this.props.store.iconNote
        const { bodyHome } = styles
        const { data } = this.state
        const { navigation } = this.props
        return (
            <View style={bodyHome}>
                <Header title={title} />
                <ScrollView>
                    <Layout>
                        { data.map(item => (
                            <ImageCard
                                iconView={iconView}
                                data={item}
                                key={item.id}
                                onPress={() => {
                                        navigation.navigate(ARTICLE_DETAILS, (item))
                                        this.gettingTitle(item.title)
                                    }
                                }
                            />
                        ))}
                    </Layout>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bodyHome: {
        backgroundColor: BGSOFT,
        flex: 1
    }
})