import React, { useEffect, useState } from 'react';
import { View, Text, Button} from 'react-native';
import Firebase from '../firebaseConfig';

import LoginOrRegister from './LoginOrRegister';
import ProfileDetails from './ProfileDetails';


const Profile = () => {
    const [userLoginState, setUserLoginState] = useState(null);
    useEffect(()=>{
        const isUserLoggedIn = Firebase.auth().currentUser;
        setUserLoginState(isUserLoggedIn);
        console.log(isUserLoggedIn);
    })

    if(userLoginState!==null){
        return(
            <ProfileDetails userLoginState={userLoginState} setUserLoginState={setUserLoginState} />
        )
    }
    else{
        return(
            <LoginOrRegister />
        )
    }
}



export default Profile;
