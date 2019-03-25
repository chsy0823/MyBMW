import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-daummap';


export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
                <MapView
    initialRegion={{
        latitude: 36.143099,
        longitude: 128.392905,
        zoomLevel: 5,
    }}
    mapType={"Standard"}
    style={{ width: 300, height: 300, }}
/>
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