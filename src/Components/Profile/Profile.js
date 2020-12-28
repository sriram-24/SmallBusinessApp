import React, { useEffect, useState } from 'react';
import Firebase from '../../../firebaseConfig';
import LoginOrRegister from './LoginOrRegister';
import ProfileDetails from './ProfileDetails';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading';


export const Profile = () => {
    const stack = createStackNavigator();
    return(
        <stack.Navigator initialRouteName={Loading} screenOptions={{headerShown:false}}>
            <stack.Screen
                name="Loading"
                component={Loading}
                options={
                    {
                        headerLeft:null,
                        
                    }
                }
            />
            <stack.Screen
                name="LoginOrSignup"
                component={LoginOrRegister}
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#211F47'
                        },
                        headerTintColor: '#fff'
                    }
                }
            />
            <stack.Screen
                name="ProfileDetails"
                component={ProfileDetails}
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#211F47'
                        },
                        headerTintColor: '#fff'
                    }
                }
            />
        </stack.Navigator>
    );
//     const [userLoginState, setUserLoginState] = useState(null);
//     useEffect(()=>{
//         const isUserLoggedIn = Firebase.auth().currentUser;
//         setUserLoginState(isUserLoggedIn);
//         console.log(isUserLoggedIn);
//     })

//     if(userLoginState!==null){
//         return(
//             <ProfileDetails userLoginState={userLoginState} setUserLoginState={setUserLoginState} />
//         )
//     }
//     else{
//         return(
//             <LoginOrRegister />
//         )
//     }
 }

