import React from 'react';
import { StyleSheet, } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons'; 
import {Home,Profile,Store,Whishlist} from './src/Components'

/*
 *  Bottom Tab Navigator is used in the application from @react-navigation V5
 *  Home - Initial screen on render component  @location: src/Components/Home
 *  Store - Store screen to display store for the user @location: src/Components/Store
 *  Whishlist - whishlist to display cart and favourites @location: src/Components/Whishlist
 *  Profile - user profiles and settings for the application @location: src/Components/Profile 
 */

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName={Home} barStyle={styles.Tab}  >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={
            {
              tabBarLabel:"Home",
              tabBarIcon:({color})=>(
                <AntDesign name="home" size={24} color={color} />
              )
            }
          }  
        />
        <Tab.Screen 
          name="Store" 
          component={Store} 
          options={{
            tabBarLabel:"Store",
            tabBarIcon:({color})=>(
              <FontAwesome5 name="store" size={20} color={color} />
            )
        }} 
        />
        <Tab.Screen
          name="Cart" 
          component={Whishlist} 
          options={{
            tabBarLabel:"Cart",
            tabBarIcon:({color})=>(
              <Feather name="shopping-cart" size={24} color={color} />
            )
        }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarLabel:"Profile",
            tabBarIcon:({color})=>(
              <Feather name="user" size={24} color={color} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  Tab:{
    backgroundColor:'#211F47'
  }
});

// #211F47