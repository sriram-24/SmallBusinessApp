import React from 'react'
import { View } from 'react-native'
import { Avatar, FAB } from 'react-native-paper'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import Firebase from '../../../firebaseConfig';

function ProfilePicture({photoUrl,userId}) {
    let imagePickerAsync = async()=>{
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if(permissionResult.granted==false){
            alert("Permission to camera roll is required")
            return
        }
        else{
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            const response = await fetch(pickerResult.uri);
            const blob = await response.blob()
            let storageRef = Firebase.storage().ref().child(`ProfilePictures/${userId}`)
            storageRef.put(blob).then(async(snapshot) =>{
                const profileUrl=await storageRef.getDownloadURL()
                await Firebase.firestore().collection('users').doc(userId).update({
                    photoUrl:profileUrl
                }).then((res)=>{
                    alert("Image Uploaded sucessfully")
                })
            })
        }
    }
    return (
        <View >
            <Avatar.Image source={{ uri:photoUrl }} size={125} />
            <FAB 
                style={{
                    position:'absolute',
                    top:80,
                    left:90,
                    backgroundColor:"#211f47"
                }}
                small
                icon={(size)=>(
                    <Feather name="edit-2" size={24} color="#ffc107" />
                )}
                onPress={imagePickerAsync}
            />
        </View>
    )
}

export default ProfilePicture
