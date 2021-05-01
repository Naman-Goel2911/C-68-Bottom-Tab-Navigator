import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class fb extends React.Component{
    render()
    {
        return(
            <View><Text style = {styles.text}>Facebook</Text></View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: 40,
        fontWeight: 'bold',
        color: 'blue'
    }
})