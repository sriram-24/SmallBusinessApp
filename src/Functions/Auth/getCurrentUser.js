async function getData() {
    let uid;
    const user = await Firebase.auth().currentUser;
    if (user != null) {
        uid = user.uid;
    }
    return uid;
}
export default getData