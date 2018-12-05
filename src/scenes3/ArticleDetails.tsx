import React, { PureComponent } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {AddArticle, ImageCard} from "../components/uimod/index";
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {onSignOut} from "../auth";
import {BGBLUE, BGDARK, BGSOFT} from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import {ARTICLE_DETAILS} from "../routes";
import addnew from '../components/HTTP/addnew'
import styles from '../components/uimod/Style'

class ArticleDetails extends PureComponent{
    newArticle(){
        const dataArt = {
            title: 'ЗАМЕТКА',
            body: 'Состояние заметки'
        }
        addnew(dataArt);
    }

    render() {
        const { authHome, btnActive, bodysAdd} = styles
        const myIcon = (<Icon name="calendar-plus-o" size={60} color={BGDARK} />)
        const { navigation } = this.props
        return(
            <View style={authHome}>
                <AddArticle
                    iconStyle={bodysAdd}
                    buttonStyle={btnActive}
                    onPress={() => this.newArticle()}
                    myIcon={myIcon}
                />
            </View>
        )
    }
}

export default ArticleDetails
