import {StyleSheet} from 'react-native'; 

export const Loginstyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    image: {
        height: null,
        width: null,
        top: 100
    },
    loginForm: {
        margin: 40,
        color: "#fff"
    },
    textinput: {
        backgroundColor: '#E8E8E8',
        padding: 10,
        marginBottom: 40,
        backgroundColor: 'rgba(255,255,255, 0.6)',
    },
    title: {
        textAlign: "center",
    }
});

export const MainStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    title: {
        textAlign: "center",
        paddingBottom: 20,
        paddingTop: 20
    },
    signinText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center"
    },
    image: {
        height: null,
        width: null,
        top: 30
    },
    bg: {
        height: 300
    },
    authForm: {
        marginTop: 50,
        padding: 20
    }
});

export const DetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        backgroundColor: "#fff"
    },
    header: {
        backgroundColor: "#d8e3e3",
        padding: 10
    },
    avatar: {
        marginTop: 20,
    },
    buyersCount: {
        position: "absolute",
        marginTop: 65,
        marginLeft: 155
    },
    buyersTag: {
        position: "absolute",
        marginTop: 85,
        marginLeft: 150
    },
    productsCount: {
        position: "absolute",
        marginTop: 65,
        marginLeft: 275
    },
    productsTag: {
        position: "absolute",
        marginTop: 85,
        marginLeft: 270
    },
    body: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D3D3"
    },
    editprofile: {

    },
    signout: {
        color: "#211F47"
    },
    gallery: {
        flex:1,
        borderTopWidth: 1,
        borderTopColor: "#D3D3D3",

    },
    productGalleryTopic: {
        textAlign: "center",
        padding: 10
    },
    galleryList: {
        padding: 5
    },
    listImage: {
        height: 175,
        width: 175,
        marginRight: 2,
        marginBottom: 2
    }
});

export const RegisterStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        textAlign: "center",
        top: 110,
        fontSize: 20,
    },
    RegisterForm: {
        alignSelf: "center",
        height: 350,
        width: 280,
        top: 190,

    },
    textinput: {
        backgroundColor: '#E8E8E8',
        padding: 10,
        marginBottom: 50
    },
    image: {
        height: null,
        width: null,
        top: 20
    },
    button: {
        top: 60,
        alignSelf: "center",
        backgroundColor: "#0e6cff",
        width: 280,
        height: 40
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        top: 10
    }
});