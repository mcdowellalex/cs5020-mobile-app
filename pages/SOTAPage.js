import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Image, Dimensions } from "react-native";

import CustomHeader from "../components/CustomHeader";




export const SOTAPage = props => {

  return (
    <ScrollView>
      <CustomHeader 
        navigation={props.navigation} //call props.navigation in component
        text = "State of the Art"
      />  
      
      <View>
            {/* current state of the art */}
            <View style={styles.container}>
                <Text style={styles.title}>Current State of the Art</Text>
                <Text>
                    The current state of the art of 5G is that it is being invested in and beginning to be deployed around the world. 
                    The actual technologies that make 5G possible have been well developed and are currently being used. There are several 
                    countries that are investing in these large scale smart networks for their own purposes such as smart cities or 
                    surveillance states. 
                </Text>
            </View>

          {/* future state of the art */}
          <View style={styles.container}>
                <Text style={styles.title}>Future State of the Art</Text>
                <Text>
                    5G technology should not change much over the near or far future. If there were new developments or ideas that 5G could
                    utilize well, it would have to be production ready very soon, otherwise parts of the network could lack the new technologies.
                    The next steps that we should see in the state of the art of 5G is in prepping it for production and actually investing
                    money into the infrastructure. It is then up to governments, states, organizations, and individuals to utilize the network
                    for purposes such as smart cities and smart factories. 
                </Text>
                <View style={{alignItems:'center', marginTop:20}}>
                    <Image style={styles.image} source={require('../content/smartCity.gif')}/> 
                    {/* <Image style={styles.image} source={require('../content/smartFactory.jpg')}/>  */}
                </View>
            </View>
      </View>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        marginRight:'5%',
        marginLeft:'5%',
        marginBottom: 40
      },
      line:{
          marginTop:10,
          borderBottomWidth: 0.5,
          borderColor:'#c2c2c2' ,
        },
      title:{
        fontSize:16,
        marginTop:10,
        marginBottom:10,
        borderBottomWidth: 0.5,
        borderColor:'#c2c2c2' ,
      },
      image: {
        width: 320,
        height: 250,
      }
});