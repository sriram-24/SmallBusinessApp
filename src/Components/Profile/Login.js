import React, { useState } from 'react';
import {View, Text, ImageBackground,  TextInput, Button, Alert} from 'react-native';
import Firebase from '../../../firebaseConfig';
import {Loginstyles} from '../../Styles';
const Login = () => {
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const userSignIn = () =>{
       return Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            Alert.alert("Login sucess");
            return user;
        })
        .catch((error) => {
            Alert.alert(error.message)
        })
    }
    
    return(
        <View style={Loginstyles.container}>
            <ImageBackground source={require('../../../assets/user_signin.png')} style={Loginstyles.image}>
                <Text style={Loginstyles.title}>LOGIN</Text>
                <View style={Loginstyles.loginForm}>
                    <TextInput
                        style={Loginstyles.textinput}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText = {(value) =>{
                            setEmail(value)
                        }}
                    />
                    <TextInput
                        style={Loginstyles.textinput}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value = {password}
                        onChangeText = {(value) =>{
                            setPassword(value)
                        }}
                    />
                    <Button title="Login" color="#0e6cff" onPress={()=>{console.log(userSignIn())}} />
                </View>
            </ImageBackground>
        </View>
    );
}

export default Login;