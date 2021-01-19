import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Firebase from '../../../firebaseConfig';

export const Loading = ({navigation}) => {
    useEffect(()=>{
        const user = Firebase.auth().currentUser.uid;
        console.log(user);
        if(user === null){
            alert('user not found please sign in!');
            navigation.navigate('Profile');
        }else{
            const doc = Firebase.firestore().collection('users').doc(user);
            doc.get().then((userdata)=>{
                if(userdata.data().storeId==null){
                    alert('store not found create store to get started!');
                    navigation.navigate('CreateStore');
                }
                else{
                    navigation.navigate('MyStore');
                }
            })
        }
    },[])
    return(
        <View>
            <ActivityIndicator 
                animating={true}
                color="#211f47"
            />
        </View>
    );
}