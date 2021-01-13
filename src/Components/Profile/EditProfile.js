import React from 'react';
import {View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Firebase from '../../../firebaseConfig';

const profileValidationSchema = yup.object({
    name:yup.string()
             .required()
             .test('does-not-contain-number','Only alphabets from a-z, A-Z allowed',(value)=>{
                 return /^[^0-9`~!@#$%^&*()_|+-,.}/'";]*$/m.test(value)
             }),
    email:yup.string()
             .required()
             .email(),
    address:yup.string()
               .required(),
    location:yup.string()
                .required(),
    phoneNumber:yup.string()
                   .required()
                   .test('contain-numbers','Only number from 0-9 allowed',(val)=>{
                       return /^[0-9]*$/m.test(val)
                   })
})

export const EditProfile = ({userId,editProfile}) =>{
    return(
        <View>
            <Formik 
                validationSchema={profileValidationSchema}
                initialValues={{
                    name: editProfile.name===null ? "":editProfile.name,
                    email: editProfile.email===null ? "":editProfile.email,
                    location: editProfile.location===null? "":editProfile.location,
                    phoneNumber: editProfile.phoneNumber===null ? "":editProfile.phoneNumber.toString() ,
                    address: editProfile.address===null ? "" : editProfile.address
                }}
                onSubmit={async(values)=>{
                    const database = Firebase.firestore()
                    const doc = await database.collection('users').doc(userId)
                    await doc.update({
                        name:values.name,
                        email:values.email,
                        location:values.location,
                        phoneNumber:values.phoneNumber,
                        address:values.address
                    }).then(
                        alert("profile updated sucessfully")
                    )
                    .catch(err=>{console.log(err)})
                }}
            >
                {(props)=>(
                    <View>
                        <Text style={editProfileStyle.title}>EDIT PROFILE {props.touched.title && props.errors.title}</Text>
                        <Text style={editProfileStyle.caption} >Name</Text>
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="name"
                            onChangeText={props.handleChange('name')}
                            onBlur={props.handleBlur('name')}
                            value ={props.values.name}
                        />
                        <Text style={editProfileStyle.error}>{props.touched.name && props.errors.name}</Text>
                        <Text style={editProfileStyle.caption} >Email</Text>
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="email"
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                            value={props.values.email}
                        />
                        <Text style={editProfileStyle.error}>{props.touched.email && props.errors.email}</Text>
                        <Text style={editProfileStyle.caption} >Address</Text>
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="Address"
                            onChangeText={props.handleChange('address')}
                            onBlur = {props.handleBlur('address')}
                            value={props.values.address}
                        />
                        <Text style={editProfileStyle.error}>{props.touched.address && props.errors.address}</Text>
                        <Text style={editProfileStyle.caption} >Location</Text>
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="location"
                            onChangeText={props.handleChange('location')}
                            onBlur = {props.handleBlur('location')}
                            value={props.values.location}
                        />
                        <Text style={editProfileStyle.error}>{props.touched.location && props.errors.location}</Text>
                        <Text style={editProfileStyle.caption} >Phone number</Text>
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="phone number"
                            onChangeText={props.handleChange('phoneNumber')}
                            onBlur={props.handleBlur('phoneNumber')}
                            value={props.values.phoneNumber}
                        />
                        <Text style={editProfileStyle.error}>{props.touched.phoneNumber && props.errors.phoneNumber}</Text>
                        <TouchableOpacity style={editProfileStyle.button} onPress={props.handleSubmit} >
                            <Text style={{color:"#f5f5f5",textAlign:"center"}} >Submit</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const editProfileStyle = StyleSheet.create({
    title:{
        textAlign:"center",
        marginBottom:10
    },
    input:{
        padding:5,
        borderRadius:5,
        backgroundColor:"#E8E8E8"
    },
    error:{
        color:'crimson',
        fontWeight:"bold",
        textAlign:"center"
    },
    caption:{
        padding:5
    },
    button:{
        marginTop:5,
        marginLeft:30,
        marginRight:30,
        backgroundColor:"#211f47",
        padding:10
    }
})