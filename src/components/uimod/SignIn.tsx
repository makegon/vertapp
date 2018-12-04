import React from "react";
import {View} from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../../auth";
import styles from './Style'

export default ({ navigation }) => {
    const { sighHome, btnActive } = styles
    return(
    <View style={sighHome}>
        <Card>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Введите Email..."/>
            <FormLabel>Пароль</FormLabel>
            <FormInput secureTextEntry placeholder="Введите пароль..."/>

            <Button
                buttonStyle={btnActive}
                title="ВОЙТИ"
                onPress={() => {
                    onSignIn().then(() => navigation.navigate("SignedIn"));
                }}
            />
        </Card>
    </View>
    )
};
