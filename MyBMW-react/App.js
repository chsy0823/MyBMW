import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Login";
import MapSearchView from "./MapSearchView";

export default class App extends React.Component {

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
                <MapSearchView/>
            )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    },
});
