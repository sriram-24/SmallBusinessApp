import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CheckProfile from './Firebase/CheckProfile';

const Profile=()=>{
    
    return(
        <View>
           <CheckProfile />
        </View>
    );
}

export default Profile;
