import React, { useState } from 'react';
import {View,Text, StyleSheet, TextInput, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import Firebase from '../../../firebaseConfig';
import {RegisterStyles} from '../../Styles';
const CreateDocumentForUser = (userCredentials) => {
    const database = Firebase.firestore()
    const userDocument = database.collection('users').doc(userCredentials.uid);
    const userData = {
        name: userCredentials.displayName,
        email: userCredentials.email,
        phoneNumber: userCredentials.phoneNumber,
        photoUrl: userCredentials.photoURL,
    }

    const documentStatus = userDocument.set(userData);
    console.log(documentStatus);
}

const Register = () =>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const userSignUp=()=>{
        Firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((user)=>{
            CreateDocumentForUser(user.user);
            Alert.alert("user created sucessfully");
        })
        .catch((error)=>{
            Alert.alert(error.message);
            console.log(error);
        })
    }
    
    return(
        <View style={RegisterStyles.container}>
            <ImageBackground source={require('../../../assets/user_waiting.png')} style={RegisterStyles.image}>
                <Text style={RegisterStyles.title}>SIGN UP</Text>
                <View style={RegisterStyles.RegisterForm}>
                    <TextInput
                        style={RegisterStyles.textinput}
                        placeholder="Enter your Email"
                        value={email}
                        onChangeText={(value) => {
                            setEmail(value)
                        }}
                    />
                    <TextInput
                        style={RegisterStyles.textinput}
                        placeholder="Enter your Password"
                        value={password}
                        onChangeText={(value) => {
                            setPassword(value)
                        }}
                        secureTextEntry={true}
                    />
                </View>
            </ImageBackground>
            <TouchableOpacity style={RegisterStyles.button} onPress={userSignUp}>
                <Text style={RegisterStyles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;