import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {Header} from "../components/uimod/index";
import {AKCENT, BGDARK, BGSOFT, BGTAP} from '../../constants'
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {ARTICLE_EDIT} from "../routes";
import styles from '../components/uimod/Style'
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class ArticleDetails extends Component{
    viewEdit() {
        this.props.store.articleView();
    }
    render() {
        const {btnActive, btnSigh, h1Article, h2Article, containerArticle, bodys} = styles
        const item = this.props.navigation.state.params
        const { title, body} = item
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
                                    onPress={() => navigation.navigate(ARTICLE_EDIT, (item))}
                                />
                            </View>
                        </ScrollView>
                        : <ScrollView>
                            <View style={bodys}>
                                <FormLabel>Название</FormLabel>
                                <FormInput placeholder={title}/>
                                <FormLabel>Содержание заметки</FormLabel>
                                <FormInput secureTextEntry placeholder={body}/>

                                <Button
                                    buttonStyle={btnActive}
                                    title={this.props.store.btnSave}
                                    onPress={() => {
                                            this.viewEdit()
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
