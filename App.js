import React from 'react';
import { StyleSheet, } from 'react-native';
import Home from './Components/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Store from './Components/Store';
import Whishlist from './Components/Whishlist';
import Profile from './Components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName={Home} barStyle={styles.Tab}  >
        <Tab.Screen name="Home" component={Home} options={
          {
            tabBarLabel:"Home",
            tabBarIcon:({color})=>(
              <AntDesign name="home" size={24} color={color} />
            )
          }
        } />
        <Tab.Screen name="Store" component={Store} options={{
          tabBarLabel:"Store",
          tabBarIcon:({color})=>(
            <FontAwesome5 name="store" size={20} color={color} />
          )
        }} />
        <Tab.Screen name="Cart" component={Whishlist} options={{
          tabBarLabel:"Cart",
          tabBarIcon:({color})=>(
            <Feather name="shopping-cart" size={24} color={color} />
          )
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
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