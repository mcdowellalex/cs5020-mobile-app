import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Button } from "react-native";

import CustomHeader from "../components/CustomHeader";




export const SOTAPage = props => {

  return (
    <ScrollView style={styles.container}>
      <CustomHeader 
        navigation={props.navigation} //call props.navigation in component
        text = "State of the Art"
      />  
      
      <View>
          {/* current state of the art */}
          <View>

          </View>

          {/* future state of the art */}
          <View>
              
          </View>
      </View>


      <View style={styles.line}/>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
  },
  line:{
      marginTop:40,
      borderBottomWidth: 0.5,
      borderColor:'#c2c2c2' ,
    },
  text:{
    fontSize:28,
  },
  lottie: {
    width: 100,
    height: 100
  }
});