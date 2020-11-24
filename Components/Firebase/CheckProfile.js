import React from 'react';
import {Text} from 'react-native';
import Firebase from '../../firebaseConfig';
import Register from '../Register';

const CheckProfile = () => {
    const user = Firebase.auth().currentUser;
    console.log(user);
    if (user) {
        return (
            <Text>This is profile</Text>
        );
    }
    else {
        return (
            <Register />
        );
    }
}

export default CheckProfile;