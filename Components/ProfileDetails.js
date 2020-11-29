import React from 'react';
import { View, Button } from 'react-native';
import Firebase from '../firebaseConfig';

const ProfileDetails = () => {
       
    const signOutUser = () => {
        Firebase.auth().signOut().then((res) => {
            setUserLoginState(null);
            navigation.navigate("Profile");
        })
    }
    return(
        <View style={{ top: 200 }}>
            <Button title="Sign out" onPress={signOutUser} />
        </View>
    );
}

export default ProfileDetails;