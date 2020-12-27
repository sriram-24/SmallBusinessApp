import React from 'react';
import {View,Text, Button, ImageBackground} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Register from './Register';
import Login from './Login';
import {MainStyles} from '../../Styles'
import ProfileDetails from './ProfileDetails';

function DisplayOptions({navigation}){
    return(
        <View style={MainStyles.container}>
            <View style={MainStyles.authForm}>
                <Text style={MainStyles.title}>New User ? Register here</Text>
                <Button title="Register" onPress={() => { navigation.navigate("Register") }} color='#0e6cff' />
                <Text style={MainStyles.signinText}>Already have an account ? Login here</Text>
                <Button title="Login" onPress={() => { navigation.navigate("Login") }} color='#0e6cff' />
            </View>
            <ImageBackground source={require('../../../assets/auth_options_bg.png')} style={MainStyles.image} >
                <View style={MainStyles.bg}>
                </View>
            </ImageBackground>
        </View>
    );
}

const LoginOrRegister = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName={DisplayOptions} >
            <Stack.Screen
                name="Authentication"
                component={DisplayOptions}
                options={
                    {
                        headerStyle: {
                            backgroundColor:'#211F47'
                        },
                        headerTintColor:'#fff'
                    }
                } 
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#211F47'
                        },
                        headerTintColor: '#fff'
                    }
                } 
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#211F47'
                        },
                        headerTintColor: '#fff'
                    }
                } 
            />
            <Stack.Screen
                name="Profile"
                component={ProfileDetails}
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#211F47'
                        },
                        headerTintColor: '#fff'
                    }
                }
            />
        </Stack.Navigator>
    );
}

export default LoginOrRegister;