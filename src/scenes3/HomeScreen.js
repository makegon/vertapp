import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Header, Add } from '../components/uimod/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BGDARK, BGSOFT } from '../../constants';
const imgurl = 'http://cdn.onlinewebfonts.com/svg/img_453986.png';
const url = 'http://10.102.100.121:3000/api/tasks?access_token=vlKd3hoPHZxLojCGSasWeaFi1Kw7G6SDnL1vm5PKmqyjyfHVGeeaEic0UAbGb06S';
const myIcon = (React.createElement(Icon, { name: "calendar-plus-o", size: 100, color: BGDARK }));
export default class HomeScreen extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: 'Список заметок'
        };
    }
    render() {
        const { bodyHome, titleLogin, loginCont } = styles;
        const { title, data } = this.state;
        const { navigation } = this.props;
        return (React.createElement(KeyboardAvoidingView, { behavior: "padding", style: bodyHome },
            React.createElement(Header, { title: title }),
            React.createElement(Add, { myIcon: myIcon })));
    }
}
const styles = StyleSheet.create({
    bodyHome: {
        backgroundColor: BGSOFT,
        flex: 1
    },
    titleLogin: {
        color: '#fff'
    },
    loginCont: {
        padding: 20,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    }
});
