import React, { Component } from 'react'
import { View, Text, Stylesheet, Button, Image } from 'react-native'
import {IconButton, Colors} from "react-native-paper";
import {HomeStyle} from '../../Styles'

export class Home extends Component {
    showNotifications(){
        console.log("This is notification");
    }
    render() {
        return (
            <View style={HomeStyle.container}>
                <Text style={HomeStyle.title}>
                    SHOPIFY
                </Text>
                <IconButton icon="bell"
                    color={Colors.black} size={20}
                    onPress={this.showNotifications}
                    style={HomeStyle.bellIcon}
                />
                
            </View>
        )
    }
}


export default Home;