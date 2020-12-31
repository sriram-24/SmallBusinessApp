import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Avatar, Title, Subheading, Caption, Button, Provider, Portal, Modal } from 'react-native-paper'
import { EditProfile } from './EditProfile'
import {containerStyle} from '~/Styles'
import { Feather, } from '@expo/vector-icons';
import Firebase from '../../../firebaseConfig'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import OtherDetails from './OtherDetails'
import PurchaseHistory from './PurchaseHistory'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const TabNavigation = ({otherdetails}) =>{
    const Tab = createMaterialTopTabNavigator();
    return(
        <Tab.Navigator initialRouteName={OtherDetails} >
            <Tab.Screen name="Other Details"  initialParams={otherdetails} >{ props => ( <OtherDetails others={otherdetails}  />)}</Tab.Screen>
            <Tab.Screen name="Purchases" component = {PurchaseHistory} />
        </Tab.Navigator>
    );
}

function ProfileDetails({navigation}) {
    const [profile, updateProfile] = useState({
        name:null,
        email:null,
        location:null,
        phoneNumber:null,
        address:null,
        photoUrl:null
    })
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const signOutUser = () => {
        Firebase.auth().signOut().then((res) => {
            navigation.navigate("LoginOrSignup")
        })
    }

    useEffect( ()=>{
        let uid;
        async function getData(){
            
            const user = await Firebase.auth().currentUser;
            if (user != null) {
                uid = user.uid;
                fetchData(uid)
            }

        }
        
        async function fetchData(){
            const doc = await Firebase.firestore().collection('users').doc(uid).get();
            if (doc.exists) {
                
                updateProfile({
                    name:doc.data().name,
                    email:doc.data().email,
                    location:doc.data().location,
                    phoneNumber:doc.data().phoneNumber,
                    address:doc.data().Address,
                    photoUrl:doc.data().photoUrl
                })
            }
            else {
                console.log("no data found")
            }
        }
        getData()
    },[])

    return (
        <Provider>
            <ScrollView style={styles.container}>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <EditProfile />
                    </Modal>
                </Portal>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.settings}>
                        <Feather name="settings" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.avatar}>
                        <Avatar.Image source={{uri:profile.photoUrl}} size={125} />
                    </View>
                    <Title style={styles.title}>
                          {profile.name}
                    </Title>
                    <Subheading>
                        {profile.email}
                    </Subheading>
                    <Caption>
                        {profile.location}
                </Caption>
                    <Button icon="account-edit" onPress={showModal} uppercase={false} mode="text" >Edit</Button>
                </View>
                <TabNavigation otherdetails={{phoneNumber:profile.phoneNumber,address:profile.address}} />
                <Button mode="contained" style={styles.button} icon="exit-to-app" color="#FF0000" onPress={signOutUser} >sign out</Button>
            </ScrollView>
        </Provider>
    )
}



const styles = StyleSheet.create({
    conatiner:{
        display:"flex",
        backgroundColor:"#f5f5f5",
        fontFamily:"Roboto"
    },
    header:{
        backgroundColor:"#DCDCDC",
        display:"flex",
        alignItems:"center"
    },
    avatar:{
       paddingTop:0
    },
    title:{
        fontFamily:"Roboto",
        textAlign:"center"
    },
    settings:{
        alignSelf:"flex-end",
        margin:30
    },
    body:{
        paddingTop:10
    },
    button:{
        marginLeft:80,
        marginRight:80,
        marginBottom:10
    },
    details:{
        paddingTop:10,
    },
    group:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding:10
    }
});

export default ProfileDetails
