import React from 'react';
import {View, TextInput, Button, Text, StyleSheet } from 'react-native';
import {Formik} from 'formik';

export const EditProfile = () =>{
    return(
        <View>
            <Formik 
                initialValues={{
                    title:'',
                    body:''
                }}
                onSubmit={(values)=>{
                    console.log(values);
                }}
            >
                {(props)=>(
                    <View>
                        <Text style={editProfileStyle.title}>EDIT PROFILE</Text>
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="title"
                            onChangeText={props.handleChange('title')}
                            value ={props.values.title}
                        />
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            style={editProfileStyle.input}
                            placeholder="title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <Button title="submit" onPress={props.handleSubmit} />
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
        marginBottom:5,
        borderRadius:5,
        backgroundColor:"#E8E8E8"
    }
})