import React, {Component} from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import { Header, ImageCard, Layout } from '../components/uikit'
import {ARTICLE_DETAILS} from "../routes";
import {BGDARK, BGSOFT} from '../../constants'
import {w} from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";

const imgurl = 'http://cdn.onlinewebfonts.com/svg/img_453986.png'
const url = 'http://10.102.100.121:3000/api/tasks?access_token=vlKd3hoPHZxLojCGSasWeaFi1Kw7G6SDnL1vm5PKmqyjyfHVGeeaEic0UAbGb06S'
const iconView = "sticky-note"

export default class HomeScreen extends Component {
    state = {
        title: 'Список заметок',
        data: []
    }

    componentDidMount = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            this.setState({ data })
        } catch (e) {
            throw e
        }
    }

    render() {
        const { bodyHome } = styles
        const { title, data } = this.state
        const { navigation } = this.props
        return (
            <View style={bodyHome}>
                <Header title={title} />
                <ScrollView>
                    <Layout>
                        { data.map(item => (
                            <ImageCard
                                iconView={iconView}
                                img={imgurl}
                                data={item}
                                key={item.id}
                                onPress={() => navigation.navigate(ARTICLE_DETAILS, (item))}
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