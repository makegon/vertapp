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
import switchart from "../components/HTTP/switcharticle";
import load from "../components/HTTP/load";

class ArticleDetails extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }
    _onChangeTitle = text => {
        const title = text;
        this.setState({
            title: title
        })

    }
    _onChangeBody = text => {
        const body = text;
        this.setState({
            body: body
        })

    }
    newArticle(){
        const body = this.state.body;
        const title = this.state.title;
        const sData = {
            title: title,
            body: body
        }
        addnew(sData)
            .then(response=> {
                console.warn('Заметка добавлена')
                this.props.store.addDone();
            });

    }


    render() {
        const { authHome, btnActive, bodysAdd} = styles
        const myIcon = (<Icon name="calendar-plus-o" size={60} color={BGDARK} />)
        const { navigation } = this.props
        return(
            <View style={authHome}>
                <AddArticle
                    onChangeTextTitle={this._onChangeTitle}
                    onChangeTextBody={this._onChangeBody}
                    iconStyle={bodysAdd}
                    buttonStyle={btnActive}
                    onPress={() => {
                        this.newArticle()
                    }}
                    myIcon={myIcon}
                />
            </View>
        )
    }
}

export default ArticleDetails
