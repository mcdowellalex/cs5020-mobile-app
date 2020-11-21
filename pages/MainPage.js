import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Button } from "react-native";

import CustomHeader from "../components/CustomHeader";
import {Footer} from '../components/Footer'




export const MainPage = props => {

  return (
    <ScrollView>
      <CustomHeader 
        navigation={props.navigation} //call props.navigation in component
        text = "Main Page"
      />  
      <View>
        {/* summary of 5G */}
        <View style={styles.container}>
          <Text style={styles.title}>What is 5G?</Text>
          <Text>
            5G is the 5th generation of cellular network technology. Currently, the worlds cell towers run 3G and 4G, but with 
            the growing demand for a higher spectral efficiency (faster download speeds and a more capacity), comes the need 
            to improve the wireless network. 
          </Text>
          <Text>
            There are 5 main components of 5G that will help the technology provide higher spectral efficiency. More detail can 
            be found <Text style={{color:'blue'}} onPress={() => props.navigation.navigate("TechnicalPage")}>here</Text>.
          </Text>
        </View>

        {/* summary of the of the art */}
        <View>

        </View>

        {/* summary of opportunities and challenges of 5G */}

      </View>
      
      <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginRight:'5%',
    marginLeft:'5%'
  },
  line:{
      marginTop:10,
      borderBottomWidth: 0.5,
      borderColor:'#c2c2c2' ,
    },
  title:{
    fontSize:16,
    marginBottom:10,
    borderBottomWidth: 0.5,
    borderColor:'#c2c2c2' ,
  },
  lottie: {
    width: 100,
    height: 100
  }
});