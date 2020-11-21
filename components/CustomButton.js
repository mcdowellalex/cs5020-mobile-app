import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {color} from '../globalVariables';

export const CustomButton = props => ( 
    <View style={styles.buttonContainer}>
        <Button 
            style={styles.button} 
            color={color}
            onPress={props.onPress} 
            title={props.text}
        />
    </View>
    
  );

const styles = StyleSheet.create({
    buttonContainer:{
        width:'40%',
    },  
    button:{
    }
});     