import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Button, Image } from "react-native";

import CustomHeader from "../components/CustomHeader";
import {Card} from '../components/Card';
import {ResourceText} from '../components/ResourceText'

export const ResourcesPage = props => {
  
  var textResources = [
    <ResourceText link='https://en.wikipedia.org/wiki/5G' text='Wikipedia' />,
    <ResourceText 
      link='https://www.forbes.com/sites/jonmarkman/2019/09/27/facial-recognition-a-force-for-good-or-government/?sh=30e05a442154' 
      text='Facial Recognition - Forbes' />,
    <ResourceText link='https://www.digitaltrends.com/mobile/what-is-5g/' text='What is 5G? - digitaltrends' />,
    <ResourceText link='https://uk.pcmag.com/cell-phone-service-providers/82400/what-is-5g' text='What is 5G? - PCmag' />,
    <ResourceText 
      link='https://www.iotsworldcongress.com/advantatges-of-5g-and-how-will-benefit-iot/#:~:text=The%20main%20advantages%20of%20the,adjusted%20connectivity%20to%20concrete%20needs.' 
      text='Advantages of 5G in IoT - IoT World Congress' />,

  ]

  var videoResources = [
    <ResourceText link='https://www.youtube.com/watch?v=cCvnML3RwJg' text='5G in China - Abacus News'/>,
    <ResourceText link='https://www.youtube.com/watch?v=_CTUs_2hq6Y' text='5G: Explained! - Marques Brownlee'/>,
    <ResourceText link='https://www.youtube.com/watch?v=2DG3pMcNNlw' text='What is 5G - CNBC International'/>,
    <ResourceText link='https://www.youtube.com/watch?v=lH2gMNrUuEY' text='China: Facial Recognition and State Control - The Economist'/>
  ]


  return (
    <ScrollView>
      <CustomHeader 
        navigation={props.navigation} //call props.navigation in component
        text = "A page of extra resources"

      /> 
      <View style={styles.container}>
        <Text style={styles.title}>Video Resources</Text>
        <View style={styles.cardContainer}>
          <Card text={videoResources} />
        </View>
        <Text style={styles.title}>Text Resources</Text>
        <View style={styles.cardContainer}>
          <Card text={textResources} />
        </View>
      </View> 
      
      

    </ScrollView>
  );
}

  const styles = StyleSheet.create({
    container:{
      paddingLeft:'5%',
      paddingRight:'5%',
    },
    cardContainer:{
        paddingBottom: 40,
      },
    title:{
      fontSize: 20,
    }
  });