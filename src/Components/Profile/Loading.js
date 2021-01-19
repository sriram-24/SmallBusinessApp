import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Firebase from '../../../firebaseConfig'
import LottieView from "lottie-react-native";
import { CurrentUser } from '~Functions';

/*
 * returns Loading screen animation from lottie-react-native
 * lottie-react-native - animation library to display animations from after effects  @reference: https://airbnb.io/lottie/#/
 * 
 */

export default class Loading extends React.Component {
     componentDidMount () {
        this.animation.play();
        
        Firebase.auth().onAuthStateChanged((user) => {
            this.props.navigation.replace(user ? 'ProfileDetails' : 'LoginOrSignup')
        })
       
    }
    
    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    ref={animation=>{this.animation = animation}}
                    style={{
                        width: 400,
                        height: 400,
                        backgroundColor: '#eee',
                    }}
                    source={require('~Shared/lottie_loading.json')}
                />
                <Text>Loading</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})