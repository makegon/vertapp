import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, FormInput, FormLabel } from "react-native-elements";
import { onSignOut } from "../auth";
import { BGBLUE, BGDARK, BGSOFT } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
class ArticleDetails extends PureComponent {
    render() {
        const { authHome, btnActive, bodys } = styles;
        const myIcon = (React.createElement(Icon, { name: "calendar-plus-o", size: 60, color: BGDARK }));
        const { navigation } = this.props;
        return (React.createElement(View, { style: authHome },
            React.createElement(Card, { title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443" },
                React.createElement(FormLabel, null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                React.createElement(FormInput, { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438..." }),
                React.createElement(FormLabel, null, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438"),
                React.createElement(FormInput, { secureTextEntry: true, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435..." }),
                React.createElement(Button, { buttonStyle: btnActive, title: "\u0421\u041E\u0425\u0420\u0410\u041D\u0418\u0422\u042C", onPress: () => onSignOut().then(() => navigation.navigate("")) }),
                React.createElement(View, { style: bodys }, myIcon))));
    }
}
const styles = StyleSheet.create({
    authHome: {
        backgroundColor: BGSOFT,
        flex: 1,
        paddingVertical: 20
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
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: "center",
        margin: 20
    }
});
export default ArticleDetails;
