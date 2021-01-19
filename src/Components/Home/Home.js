import React, { Component } from 'react'
import { View, Text, Stylesheet, Button, Image } from 'react-native'
import {IconButton, Colors, Searchbar} from "react-native-paper";
import {HomeStyle} from '../../Styles'

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            searchQuery:''
        };
        this.addSearchQuery = this.addSearchQuery.bind(this);
    }
    showNotifications(){
        console.log("This is notification");
    }
    addSearchQuery(query){
        this.setState({searchQuery:query})
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
                <Searchbar 
                    placeholder = "Search for products "
                    onChangeText={this.addSearchQuery}
                    value = {this.state.searchQuery}
                    style={HomeStyle.searchBar}
                />
            </View>
        );
    }
}


export default Home;