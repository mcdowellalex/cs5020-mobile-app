import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

export const ResourceText = props => {

    return(
        <Text 
            style={styles.clickable}
            onPress={() => Linking.canOpenURL(props.link).then(() => {
                Linking.openURL(props.link)
            })} 
        >
            {props.text}
        </Text>
    
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