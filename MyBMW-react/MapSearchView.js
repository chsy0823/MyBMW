import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient, MapView} from 'expo';


export default class MapSearchView extends Component {
    render() {
        return(
            <View>
                <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            
            style={{ width: 300, height: 300, }}
            />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex:1,
   }
});