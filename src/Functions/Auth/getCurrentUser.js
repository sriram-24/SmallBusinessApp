import Firebase from "../../../firebaseConfig"

export const CurrentUser = () =>{
    Firebase.auth().onAuthStateChanged((user) =>{
        return user.uid
    })
}

