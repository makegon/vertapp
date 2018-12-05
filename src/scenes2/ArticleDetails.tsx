import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/uimod/index";
import {AKCENT, BGDARK, BGSOFT, BGTAP} from '../../constants'
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {ARTICLE_DETAILS, ARTICLE_EDIT, APP_HOME} from "../routes";
import styles from '../components/uimod/Style'
import {inject, observer} from "mobx-react";
import todelete from "../components/HTTP/delete";

@inject('store')
@observer
class ArticleDetails extends Component{
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
        console.warn('text', text)
    }
    render() {
        const {btnActive, btnSigh, h1Article, h2Article, containerArticle, bodys} = styles
        const item = this.props.navigation.state.params
        const { title, body, id} = item
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
                                    onChangeText={this._onChangeText}
                                    placeholder={title}
                                />
                                <FormLabel>Содержание заметки</FormLabel>
                                <FormInput
                                    onChangeText={this._onChangeText}
                                    placeholder={body}
                                />

                                <Button
                                    buttonStyle={btnActive}
                                    title={this.props.store.btnSave}
                                    onPress={() => {
                                            console.warn('Title')
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
