import React,{useState} from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export const MainPage = ({navigation}) => {

    const [searchQuery,addSearchQuery] = useState('');

    return(
        <ScrollView>
            <Searchbar
                placeholder="Search for Stores"
                onChangeText={addSearchQuery}
                value={searchQuery}
                style={styles.searchBar}
            />
            <TouchableOpacity onPress={() => { navigation.navigate('Loading') }} style={styles.myStoreButton}>
                <MaterialIcons name="business-center" size={42} color="black" />
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 60,
    },
    myStoreButton:{
        position:'absolute',
        top:50,
        left:310
    }
});
