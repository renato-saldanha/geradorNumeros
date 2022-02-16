import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={style.Num}>{num}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    Container: {
        width: 50,
        backgroundColor: 'gray',
        borderRadius: 75
    },
    Num: {
        color: 'white', 
        textAlign:'center'
    }
})