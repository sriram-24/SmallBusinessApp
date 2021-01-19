import React, { useEffect, useState } from 'react';
import ProfileDetails from './ProfileDetails';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading';
import DisplayOptions from './LoginOrRegister';
import Login from './Login';
import Register from './Register';

/*
 *  Stack Navigator is used for profile navigation from @react-navigation/stack
 *  Loading - initial route to Loading screen display animation untl user profile is loaded @location: loading.js
 *  LoginOrSignup - displays the login or register options to the user @location: loginOrRegister.js
 *  ProfileDetails - sucessfull login or loading profile displays profile details screen @location: ProfileDetails.js
 *  
 */

export const Profile = () => {
    const stack = createStackNavigator();
    return(
        <stack.Navigator initialRouteName={Loading} screenOptions={{headerShown:false}}>
            <stack.Screen
                name="Loading"
                component={Loading}
                options={
                    {
                        headerLeft:null,
                        gestureEnabled:false
                    }
                }
            />
            <stack.Screen
                name="LoginOrSignup"
                component={DisplayOptions}
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#211F47'
                        },
                        headerTintColor: '#fff'
                    }
                }
            />
            <stack.Screen
                name="ProfileDetails"
                component={ProfileDetails}
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#211F47'
                        },
                        headerTintColor: '#fff',
                        headerLeft:null,
                        gestureEnabled:false
                    }
                }
            />
            <stack.Screen
                name="Login"
                component={Login}
                options={
                    {
                        headerLeft: null,
                        gestureEnabled: false
                    }
                }
            />
            <stack.Screen
                name="Register"
                component={Register}
                options={
                    {
                        headerLeft: null,
                        gestureEnabled: false
                    }
                    
                }
            />
        </stack.Navigator>
    );
 }