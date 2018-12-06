import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { AddArticle } from "../components/uimod/index";
import { BGDARK } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { APP_HOME } from "../routes";
import addnew from '../components/HTTP/isDelete/addnew';
import styles from '../components/uimod/Style';
class ArticleDetails extends PureComponent {
    constructor(props) {
        super(props);
        this._onChangeTitle = text => {
            const title = text;
            this.setState({
                title: title
            });
        };
        this._onChangeBody = text => {
            const body = text;
            this.setState({
                body: body
            });
        };
        this.state = {
            title: '',
            body: ''
        };
    }
    newArticle() {
        const body = this.state.body;
        const title = this.state.title;
        const sData = {
            title: title,
            body: body,
            done: false
        };
        addnew(sData)
            .then(response => {
            console.warn('Заметка добавлена');
        });
    }
    render() {
        const { authHome, btnActive, bodysAdd } = styles;
        const myIcon = (React.createElement(Icon, { name: "calendar-plus-o", size: 60, color: BGDARK }));
        const { navigation } = this.props;
        return (React.createElement(View, { style: authHome },
            React.createElement(AddArticle, { onChangeTextTitle: this._onChangeTitle, onChangeTextBody: this._onChangeBody, iconStyle: bodysAdd, buttonStyle: btnActive, onPress: () => {
                    this.newArticle();
                    navigation.navigate(APP_HOME);
                }, myIcon: myIcon })));
    }
}
export default ArticleDetails;
