import React from 'react';
import {View,Text, Alert, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Register from './Register';
import Login from './Login';

function DisplayOptions({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>New User ? Register here</Text>
            <Button title="Register" onPress={() => { navigation.navigate("Register") }} color='#0e6cff' />
            <Text style={styles.signinText}>Already have an account ? Login here</Text>
            <Button title="Login" onPress={() => { navigation.navigate("Login") }} color='#0e6cff'/>
        </View>
    );
}

const LoginOrRegister = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName={DisplayOptions}>
            <Stack.Screen name="Authentication" component={DisplayOptions} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

const styles =  StyleSheet.create({
    container:{
        alignItems:"center",
        top: 200,
    },
    title:{
        paddingBottom:20
    },
    signinText:{
        marginTop:20,
        marginBottom:20
    }

})

export default LoginOrRegister;