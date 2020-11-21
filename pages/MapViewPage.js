import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import {color} from '../globalVariables'
import CustomMapView from '../components/CustomMapView';
import CustomHeader from "../components/CustomHeader";

export const MapViewPage = props => {

    return (
      <ScrollView>
        
        <CustomHeader 
          navigation={props.navigation} //call props.navigation in component
          text = "Cell map of St Andrews"
        />  
        <Text  style={styles.container}>
            Below is a map showing roughly how many and where the 5G nodes would need to be if the city center was
            to be a smart city. For comparison, EE has one 4G tower to cover the entire city center and beyond. But,
            because 5G towers only have an effective range of up to a couple hundred meters, there needs to be a lot of them.
            Basically every street corner will eventually have a node if a smart city is going to be possible.
        </Text>
        <CustomMapView />

      </ScrollView>
    );
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