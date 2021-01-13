import React, { useEffect, useState } from 'react';
import ProfileDetails from './ProfileDetails';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading';
import DisplayOptions from './LoginOrRegister';


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
        </stack.Navigator>
    );
 }

