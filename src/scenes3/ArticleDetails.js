import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { AddArticle } from "../components/uimod/index";
import { BGDARK } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import addnew from '../components/HTTP/addnew';
import styles from '../components/uimod/Style';
class ArticleDetails extends PureComponent {
    newArticle() {
        const dataArt = {
            title: 'ЗАМЕТКА',
            body: 'Состояние заметки'
        };
        addnew(dataArt);
    }
    render() {
        const { authHome, btnActive, bodysAdd } = styles;
        const myIcon = (React.createElement(Icon, { name: "calendar-plus-o", size: 60, color: BGDARK }));
        const { navigation } = this.props;
        return (React.createElement(View, { style: authHome },
            React.createElement(AddArticle, { iconStyle: bodysAdd, buttonStyle: btnActive, onPress: () => this.newArticle(), myIcon: myIcon })));
    }
}
export default ArticleDetails;
