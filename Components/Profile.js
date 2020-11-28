import React, { useEffect, useState } from 'react';
import { View, Text, Button} from 'react-native';
import Firebase from '../firebaseConfig';

import LoginOrRegister from './LoginOrRegister';


const Profile = ({navigation}) => {
    const [userLoginState, setUserLoginState] = useState(null);
    useEffect(()=>{
        const isUserLoggedIn = Firebase.auth().currentUser;
        setUserLoginState(isUserLoggedIn);
        console.log(isUserLoggedIn);
        
    })

    const signOutUser = () =>{
        Firebase.auth().signOut().then((res)=>{
            setUserLoginState(null);
            navigation.navigate("Profile");
        })
    }
    if(userLoginState!==null){
        return(
            <View style={{top:200}}>
                <Button title="Sign out" onPress={signOutUser}  />
            </View>
        )
    }
    else{
        return(
            <LoginOrRegister />
        )
    }
}



export default Profile;
