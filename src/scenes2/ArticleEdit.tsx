import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/uimod/index";
import {AKCENT, BGDARK, BGSOFT, BGTAP} from '../../constants'
import {Button, FormInput, FormLabel} from "react-native-elements";
import {ARTICLE_EDIT} from "../routes";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class ArticleDetails extends Component{
    viewEdit() {
        this.props.store.articleView();
    }
    render() {
        const {btnActive, container, bodys} = styles
        const { title, body} = this.props.navigation.state.params
        const { navigation } = this.props
        return(
            <View style={container}>
                <Header
                    detail
                    title={title}
                    leftIcon='angle-double-left'
                    headerColor={BGDARK}
                    leftBtnColor={AKCENT}
                    onPress={() =>{
                            navigation.goBack()
                            this.viewEdit()
                        }
                    }
                />
                {
                    this.props.store.articleEdit ?
                        <View><Text>FALSE</Text></View> :
                        <View><Text>TRUE</Text></View>

                }

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

    }

})

export default ArticleDetails
