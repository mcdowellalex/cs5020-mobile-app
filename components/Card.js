import React from "react";
import { View, Text, StyleSheet, } from "react-native";

export const Card = props => {

    return(

    <View style={styles.container}>
        {props.text.map((link) => 
            <Text>{link}</Text>)
        }
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        padding:5,
        width:'100%',
        borderWidth:1,
        borderColor:'black',
        shadowColor:'grey',
        shadowOffset:{
            height:1,
            width:1
        },
        shadowOpacity:0.6,
        borderRadius:5,
        
    },
});     