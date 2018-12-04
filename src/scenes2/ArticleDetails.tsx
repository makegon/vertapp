import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/uimod/index";
import {AKCENT, BGDARK, BGSOFT, BGTAP} from '../../constants'
import {Button, Card} from "react-native-elements";
import {ARTICLE_EDIT} from "../routes";
import {inject, observer} from "mobx-react";
@inject('store')
@observer
class ArticleDetails extends Component{
    render() {
        const {btnActive, btnSigh, h1, h2, container, bodys} = styles
        const item = this.props.navigation.state.params
        const { title, body} = item
        const { navigation } = this.props
        return(
            <View style={container}>
                <Header
                    detail
                    title={title}
                    leftIcon='angle-double-left'
                    headerColor={BGDARK}
                    leftBtnColor={AKCENT}
                    onPress={() =>navigation.goBack()}
                />
                <ScrollView>
                    <View style={bodys}>
                    <Text style={h1} >{title}</Text>
                    <Text style={h2}>{body.replace(/<[^>]+>/g, '')}</Text>
                    <Button
                        buttonStyle={btnActive}
                        title={this.props.store.btnEdit}
                        onPress={() => navigation.navigate(ARTICLE_EDIT, (item))}
                    />
                    <Button
                        buttonStyle={btnSigh}
                        textStyle={{color:BGSOFT}}
                        title={this.props.store.btnDrop}
                        onPress={() => navigation.navigate(ARTICLE_EDIT, (item))}
                    />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btnActive:{
        marginTop: 20,
        backgroundColor: BGDARK
    },
    h1:{
        padding: 15,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 26,
        alignSelf: 'center',
        textAlign: 'center'
    },
    h2:{
        paddingHorizontal: 15,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        color: '#424242',
        alignSelf: 'center',
        textAlign: 'center'
    },
    container:{
        backgroundColor: '#fff'
    },
    bodys:{
        alignItems: "center",
        flex: 1,
        marginBottom: 150,
        backgroundColor: "#fff"

    },
    btnSigh:{
        marginTop: 20,
        backgroundColor: "transparent"
    }

})

export default ArticleDetails
