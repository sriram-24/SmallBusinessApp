import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Firebase from '../../../firebaseConfig'
export default class Loading extends React.Component {
    componentDidMount() {
        Firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'ProfileDetails' : 'LoginOrSignup')
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" visible={true} color="#000" />
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