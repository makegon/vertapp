import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button } from "react-native-elements";
import { AKCENT, BGBLUE, BGDARK, BGSOFT } from '../../constants';
import Icon from "react-native-vector-icons/FontAwesome";
import { onSignOut } from '../auth';
export default ({ navigation }) => {
    const { authHome, bodys, btnActive, akcentEye, iconA } = styles;
    const myIcon = (React.createElement(Icon, { style: iconA, name: "user-secret", size: 100, color: BGDARK }));
    const userName = "Александр";
    const btnName = "ВЫЙТИ";
    return (React.createElement(View, { style: authHome },
        React.createElement(Card, { title: userName },
            React.createElement(View, { style: bodys },
                React.createElement(View, { style: akcentEye }),
                myIcon),
            React.createElement(Button, { buttonStyle: btnActive, title: btnName, onPress: () => onSignOut().then(() => navigation.navigate("SignedOut")) }))));
};
const styles = StyleSheet.create({
    authHome: {
        backgroundColor: BGSOFT,
        flex: 1,
        paddingVertical: 20
    },
    iconA: {
        borderRadius: 40
    },
    btnActive: {
        marginTop: 20,
        backgroundColor: BGDARK
    },
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    bodys: {
        alignItems: "center",
        backgroundColor: BGBLUE,
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: "center",
        marginBottom: 20
    },
    akcentEye: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 40,
        backgroundColor: AKCENT,
        marginTop: 10
    }
});
