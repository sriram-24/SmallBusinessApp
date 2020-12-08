import React from 'react';
import {View,Text, Alert, Button, StyleSheet, ImageBackground} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Register from './Register';
import Login from './Login';

function DisplayOptions({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.authForm}>
                <Text style={styles.title}>New User ? Register here</Text>
                <Button title="Register" onPress={() => { navigation.navigate("Register") }} color='#0e6cff' />
                <Text style={styles.signinText}>Already have an account ? Login here</Text>
                <Button title="Login" onPress={() => { navigation.navigate("Login") }} color='#0e6cff' />
            </View>
            <ImageBackground source={require('../assets/auth_options_bg.png')} style={styles.image} >
                <View style={styles.bg}>
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
        </Stack.Navigator>
    );
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1
    },
    title:{
        textAlign:"center",
        paddingBottom:20,
        paddingTop:20
    },
    signinText:{
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
    },
    image: {
        height: null,
        width: null,
        top: 30
    },
    bg:{
        height:300
    },
    authForm:{
        marginTop:50,
        padding:20
    }
})

export default LoginOrRegister;