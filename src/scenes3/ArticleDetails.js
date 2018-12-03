import React, { PureComponent } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/uikit";
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {onSignOut} from "../auth";
import {BGBLUE, BGDARK, BGSOFT} from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";

class ArticleDetails extends PureComponent{
    render() {
        const { authHome, btnActive, bodys} = styles
        const myIcon = (<Icon name="calendar-plus-o" size={60} color={BGDARK} />)


        const { navigation } = this.props

        return(
            <View style={authHome}>
                <Card title="Добавить заметку">

                    <FormLabel>Название</FormLabel>
                    <FormInput placeholder="Введите название заметки..."/>
                    <FormLabel>Содержание заметки</FormLabel>
                    <FormInput secureTextEntry placeholder="Введите содержание..."/>
                    <Button
                        buttonStyle={btnActive}
                        title="СОХРАНИТЬ"
                        onPress={() => onSignOut().then(() => navigation.navigate(""))}
                    />
                    <View style={bodys}>
                        {myIcon}
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    authHome: {
        backgroundColor: BGSOFT,
        flex: 1,
        paddingVertical: 20

    },
    btnActive:{
        marginTop: 20,
        backgroundColor: BGDARK
    },
    container:{
        backgroundColor: '#fff',
        flex: 1
    },
    bodys:{
        alignItems: "center",
        backgroundColor: BGBLUE,
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: "center",
        margin: 20

    }
})

export default ArticleDetails
