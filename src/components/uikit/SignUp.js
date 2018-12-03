import React from "react";
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../../auth";
import {BGDARK, BGSOFT} from "../../../constants";


export default ({ navigation }) => {
    const { sighHome, btnSigh, btnActive } = styles
    return(
        <View style={sighHome}>
            <Card>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Введите Email..." />
                <FormLabel>Пароль</FormLabel>
                <FormInput secureTextEntry placeholder="Введите пароль..." />
                <FormLabel>Повторите пароль</FormLabel>
                <FormInput secureTextEntry placeholder="Повторите пароль..." />

                <Button
                    buttonStyle={btnActive}
                    title="РЕГИСТРАЦИЯ"

                    onPress={() => {
                        onSignIn().then(() => navigation.navigate("SignedIn"));
                    }}
                />
                <Button
                    buttonStyle={btnSigh}

                    textStyle={{color:BGSOFT}}
                    title="Вход"
                    onPress={() => navigation.navigate("SignIn")}
                />
            </Card>

        </View>
        )
};

const styles = StyleSheet.create({
    sighHome: {
        backgroundColor: BGSOFT,
        flex: 1,
        paddingVertical: 20

    },
    btnActive:{
        marginTop: 20,
        backgroundColor: BGDARK
    },
    btnSigh:{
        marginTop: 20,
        backgroundColor: "transparent"
    }
})