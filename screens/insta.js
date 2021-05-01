import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class insta extends React.Component{
    render()
    {
        return(
            <View><Text style = {styles.text}>Instagram</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 19,
        marginTop: 40,
        fontWeight: 'bold',
        color: 'red'
    }
})