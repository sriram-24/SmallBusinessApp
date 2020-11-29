import React, { useState } from 'react';
import {View,Text, StyleSheet, TextInput, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import Firebase from '../firebaseConfig';

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

    userSignUp=()=>{
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
        <View style={styles.container}>
            <ImageBackground source={require('../assets/user_waiting.png')} style={styles.image}>
                <Text style={styles.title}>SIGN UP</Text>
                <View style={styles.RegisterForm}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your Email"
                        value={email}
                        onChangeText={(value) => {
                            setEmail(value)
                        }}
                    />
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter your Password"
                        value={password}
                        onChangeText={(value) => {
                            setPassword(value)
                        }}
                        secureTextEntry={true}
                    />
                </View>
            </ImageBackground>
            <TouchableOpacity style={styles.button} onPress={userSignUp}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex:1,  
    },
    title:{
        textAlign:"center",
        top:110,
        fontSize:20,
    },
    RegisterForm:{
        alignSelf:"center",
        height:350,
        width:280,
        top:190,
        
    },
    textinput:{
        backgroundColor: '#E8E8E8',
        padding:10,
        marginBottom:50
    },
    image:{
        height:null,
        width:null,
        top:20
    },
    button:{
        top:60,
        alignSelf:"center",
        backgroundColor:"#0e6cff",
        width:280,
        height:40
    },
    buttonText:{
        color: "#fff",
        textAlign: "center",
        top:10
    }
});

export default Register;