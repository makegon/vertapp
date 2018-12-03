import React, { PureComponent } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/uikit";
import {AKCENT, BGDARK, BGSOFT, BGTAP} from '../../constants'
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {ARTICLE_EDIT} from "../routes";

class ArticleDetails extends PureComponent{
    render() {
        const {btnActive, h1, h2, container, bodys} = styles

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
                    onPress={() =>navigation.goBack()}
                />
                <ScrollView>
                    <View style={bodys}>
                        <FormLabel>Название</FormLabel>
                        <FormInput placeholder={title}/>
                        <FormLabel>Содержание заметки</FormLabel>
                        <FormInput secureTextEntry placeholder={body}/>

                    <Button
                        buttonStyle={btnActive}
                        title="СОХРАНИТЬ"
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

    }

})

export default ArticleDetails