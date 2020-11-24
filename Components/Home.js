import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import {IconButton, Colors} from "react-native-paper";
class Home extends Component {
    showNotifications(){
        console.log("This is notification");
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    SHOPIFY
                </Text>
                <IconButton icon="bell"
                    color={Colors.black} size={20}
                    onPress={this.showNotifications}
                    style={styles.bellIcon}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title:{
        top:70,
        fontSize:25
    },
    bellIcon:{
        top:34,
        left:130
    }
});

export default Home;