import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    this is home Component
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});

export default Home
