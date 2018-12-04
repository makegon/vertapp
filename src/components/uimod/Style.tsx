import React from 'react'
import {StyleSheet} from "react-native";
import {AKCENT, BGBLUE, BGDARK, BGSOFT, BGTAP, w} from "../../../constants";


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: BGDARK,
        height: 116,
        justifyContent: 'center',
        paddingLeft: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        borderColor: AKCENT,
        borderBottomWidth: 1.5
    },
    leftBtnStyle:{
        paddingTop: 10,
        fontSize: 55
    },
    textStyle: {
        color: BGTAP,
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold',
        paddingTop: 5,

        position:'absolute',
        alignItems: 'center'
    },
    buttonBack: {
        color: AKCENT,
        padding: 1,
        position: 'relative',
        fontSize: 24
    },
    btnText:{
        color: BGBLUE,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '700'
    },
    btnCont:{
        paddingVertical: 10,
        backgroundColor: BGDARK,
        width: 100,
        height: 40,
        alignItems: 'center',
        borderRadius: 10
    },
    titleLogin:{
        color: BGBLUE
    },
    loginCont:{
        padding:20,
        alignItems:'center',
        flexGrow:1,
        justifyContent: 'center'
    },
    addArticle:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: 270,
        marginBottom: 20,
        color: BGBLUE,
        fontFamily: 'AvenirNext-DemiBold',
        paddingHorizontal: 10,
        marginTop: 10,
        fontWeight: '700'
    },
    container: {
        width: w / 2.4,
        paddingVertical: 10
    },
    sub: {
        width: 70,
        padding: 15,
        borderColor: AKCENT,

        height: 70,
        shadowColor: '#000',
        borderRadius: 100,
        backgroundColor: BGBLUE,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4,
        alignSelf: 'center'
    },
    h1: {
        padding: 1,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        width: w - 30,
        color: BGBLUE
    },
    cover: {
        width: w / 5.4,
        height: w * 0.13,
        borderRadius: 10
    },
    containerLayout: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        padding: 10,
        marginBottom: 150
    },
    inputForm:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 270,
        marginBottom: 20,
        color: BGDARK,
        fontFamily: 'AvenirNext-DemiBold',
        paddingHorizontal: 10,
        marginTop: 10,
        fontWeight: '700'
    },
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

export default styles