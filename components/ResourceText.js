import React from "react";
import { View, Text, StyleSheet, } from "react-native";

export const ResourceText = props => {

    return(
        <Text onPress={() => window.open(props.link)} style={styles.clickable}>{props.text}</Text>
    
  )
}

const styles = StyleSheet.create({
    clickable:{
        fontSize: 16,
        color:'blue',
        textDecorationLine:'underline',
        textDecorationColor:'blue'
    }
});  