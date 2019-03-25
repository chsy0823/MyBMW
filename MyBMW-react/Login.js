import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class Login extends Component {
    render() {
        return(
            <LinearGradient colors={["#00C6FB", "#0056EA"]} style={styles.container}>
                <Ionicons color="white" size={144} name="ios-rainy" />
                <Text> test login view!</Text>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex:1,
   }
});