import React from "react";
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Tab1 from "./scenes1/index";
import Tab2 from "./scenes2/index";
import Tab3 from "./scenes3/index";
import Fonticon from 'react-native-vector-icons/FontAwesome';
import { AKCENT, BGDARK } from "../constants";
import SignUp from "./components/uimod/SignUp";
import SignIn from "./components/uimod/SignIn";
export const SignedOut = createStackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Страница регистрации"
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Вход в приложение"
        }
    }
});
export const SignedIn = createBottomTabNavigator({
    LOGIN: Tab1,
    ARTICLE: Tab2,
    ADD: Tab3
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'LOGIN') {
                iconName = focused ? 'user-circle' : 'user-circle-o';
            }
            else if (routeName === 'ARTICLE') {
                iconName = focused ? 'tag' : 'tags';
            }
            else if (routeName === 'ADD') {
                iconName = focused ? 'plus-square' : 'plus-square-o';
            }
            return React.createElement(Fonticon, { name: iconName, size: 25, color: tintColor });
        },
        tabBarOptions: {
            activeTintColor: AKCENT,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: BGDARK,
            },
        }
    })
});
export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator({
        SignedIn: {
            screen: SignedIn
        },
        SignedOut: {
            screen: SignedOut
        }
    }, {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    });
};
