import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import {color} from '../globalVariables'
import { ResourceText } from "./ResourceText";

export const Footer = props => {

    return(

    
    <View>
        <View style={styles.line} />
        <View style={styles.container}>
            <Text>Alex McDowell</Text>
            <ResourceText link='https://github.com/mcdowellalex' text='GitHub' />
            <ResourceText link='https://alexmcdowell.netlify.app/' text='Personal Site' />
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