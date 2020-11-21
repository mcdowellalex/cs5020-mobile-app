import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import {color} from '../globalVariables'

export const Footer = props => {

    return(

    
    <View>
        <View style={styles.line} />
        <View style={styles.container}>
            <Text>Alex McDowell</Text>
            <Text style={{color:'blue'}} onPress={() => window.open('https://github.com/mcdowellalex')}>Github</Text>
            <Text style={{color:'blue'}} onPress={() => window.open('https://alexmcdowell.netlify.app/')}>Personal Site</Text>
        </View>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:20
    },
    line:{
        marginTop:40,
        marginBottom: 20,
        borderBottomWidth: 0.5,
        borderColor:'#c2c2c2' ,
    },
});    