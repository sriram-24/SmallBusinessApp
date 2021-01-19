import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {MainPage} from './MainPage';
import { MyStore } from './MyStore';
import { Loading } from './Loading';
import { CreateStore } from './createStore';

export const Store = () => {

    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName={MainPage} screenOptions={{headerShown:false}} >
            <Stack.Screen  
                name="MainPage"
                component = {MainPage}
            />
            <Stack.Screen 
                name="MyStore"
                component={MyStore}
            />
            <Stack.Screen
                name="Loading"
                component={Loading}
            />
            <Stack.Screen
                name="CreateStore"
                component={CreateStore}
            />
        </Stack.Navigator>
    );
}


// export class Store extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             searchQuery: ''
//         }
//     }

//     addSearchQuery(query) {
//         this.setState({ searchQuery: query })
//     }

//     render() {
//         return (
//             <ScrollView>
//                 <Searchbar 
//                     placeholder="Search for Stores "
//                     onChangeText={this.addSearchQuery}
//                     value={this.state.searchQuery}
//                     style={styles.searchBar}
//                 />
//                 <TouchableOpacity onPress={()=>{console.log('store')}} style={styles.myStoreButton}>
//                     <MaterialIcons name="business-center" size={34} color="black" />
//                 </TouchableOpacity>
//             </ScrollView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     searchBar: {
//         marginTop: 50,
//         marginLeft: 10,
//         marginRight: 60,
//     },
//     myStoreButton:{
//         position:'absolute',
//         top:55,
//         left:310
//     }
// });
// export default Store
