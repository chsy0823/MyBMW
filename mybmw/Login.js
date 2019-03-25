import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text> test login view</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex:1,
       backgroundColor: "#00c6fb"
   }
});