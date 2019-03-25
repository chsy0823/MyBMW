/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Login from "./Login";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev men u',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        isLogedIn: false
    };

    render() {
        const { isLogedIn } = this.state;
        return (
            <View style={styles.container}>
                {isLogedIn ? (
                    <View style={styles.redView}/>

                ): (
                    <Login/>
                )}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    redView: {
        flex:1,
        backgroundColor: 'red',
    },
    yellowView: {
        flex:1,
        backgroundColor:'yellow'
    }
});
