import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Subheading, Button } from 'react-native-paper'
import { Feather, FontAwesome } from '@expo/vector-icons';


const OtherDetails =({navigation,others}) => {
    console.log(others);
    return (
        <View style={styles.body}>
            <View style={styles.details}>
                <View style={styles.group}>
                    <Feather style={{ marginRight: 20 }} name="phone" size={24} color="black" />
                    <Text>{others.phoneNumber}</Text>
                </View>
                <View style={styles.group}>
                    <FontAwesome style={{ marginRight: 20 }} name="address-book-o" size={24} color="black" />
                    <Text>{others.address}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        display: "flex",
        backgroundColor: "#f5f5f5",
        fontFamily: "Roboto"
    },
    header: {
        backgroundColor: "#00C899",
        display: "flex",
        alignItems: "center"
    },
    avatar: {
        paddingTop: 0
    },
    title: {
        fontFamily: "Roboto",
        textAlign: "center"
    },
    settings: {
        alignSelf: "flex-end",
        margin: 30
    },
    body: {
        paddingTop: 10,
        
    },
    button: {
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 10
    },
    details: {
        paddingTop: 10,
    },
    group: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    }
});

export default OtherDetails
