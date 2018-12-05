import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Header, ImageCard, SwitchTab} from "../components/uimod/index";
import {AKCENT, BGBLUE, BGDARK, BGSOFT, BGTAP} from '../../constants'
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {ARTICLE_DETAILS, ARTICLE_EDIT, APP_HOME} from "../routes";
import styles from '../components/uimod/Style'
import {inject, observer} from "mobx-react";
import todelete from "../components/HTTP/delete";
import switchart from "../components/HTTP/switcharticle";

@inject('store')
@observer
class ArticleDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            done:'',
            id:''
        };
    }
    viewEdit() {
        this.props.store.articleView();
    }

    onDelete(id) {
        todelete (`http://10.102.100.121:3000/api/tasks/${id}?access_token=${this.props.store.token}`)
            .then(response=> {
                console.warn('URLDEL УСПЕШНО');
                this.props.navigation.goBack()

            });
    }

    _onChangeText = text => {
        const body = text;
        this.setState({
            body: body
        })

    }
    _onChangeTitle = text => {
        const title = text;
        this.setState({
            title: title
        })

    }
    _onChangeSwitch = text => {
        const done = !text;
        this.setState({
            done : done
        })

    }
    sendData = id =>{
        const body = this.state.body;
        const title = this.state.title;
        const done = this.state.done;
        const sData = {
            title: title,
            body: body,
            done: done,
            id: id
        }
        switchart(sData)
    }
    render() {
        const {btnActive, btnSigh, h1Article, h2Article, containerArticle, bodys} = styles
        const item = this.props.navigation.state.params
        const { title, body, id, done} = item
        const { navigation } = this.props
        return(
            <View style={containerArticle}>
                <Header
                    detail
                    title={title}
                    leftIcon='angle-double-left'
                    headerColor={BGDARK}
                    leftBtnColor={AKCENT}
                    onPress={() =>{
                            {
                                this.props.store.articleEdit ?
                                    navigation.goBack() :
                                    this.viewEdit()
                            }
                        }
                    }
                />
                {
                    this.props.store.articleEdit
                        ? <ScrollView>
                            <View style={bodys}>
                                <Text style={h1Article} >{title}</Text>
                                <Text style={h2Article}>{body.replace(/<[^>]+>/g, '')}</Text>
                                <Text>ID заметки{id}</Text>
                                <Button
                                    buttonStyle={btnActive}
                                    title={this.props.store.btnEdit}
                                    onPress={() => {
                                        this.viewEdit()
                                    }
                                    }
                                />
                                <Button
                                    buttonStyle={btnSigh}
                                    textStyle={{color:BGSOFT}}
                                    title={this.props.store.btnDrop}
                                    onPress={() => this.onDelete(id)}

                                />
                            </View>
                        </ScrollView>
                        : <ScrollView>
                            <View style={bodys}>
                                <FormLabel>Название</FormLabel>
                                <FormInput
                                    placeholder={title}
                                    onChangeText={this._onChangeTitle}
                                />
                                <FormLabel>Содержание заметки</FormLabel>
                                <FormInput
                                    onChangeText={this._onChangeText}
                                    placeholder={body}
                                />
                                <SwitchTab
                                    onValueChange={() => {
                                        this._onChangeSwitch(item.done)
                                    }
                                    }
                                    switchState={done}
                                    onTintColor={AKCENT}
                                    thumbTintColor={BGDARK}
                                    tintColor={BGBLUE}
                                    />

                                <Button
                                    buttonStyle={btnActive}
                                    title={this.props.store.btnSave}
                                    onPress={() => {
                                            navigation.navigate(APP_HOME)
                                            this.viewEdit()
                                            //this.sendData(id)
                                        }
                                    }
                                />
                            </View>
                        </ScrollView>
                }

            </View>
        )
    }
}

export default ArticleDetails
