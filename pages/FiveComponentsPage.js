import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Image } from "react-native";

import CustomHeader from "../components/CustomHeader";




export const FiveComponentsPage = props => {

  return (
    <ScrollView>
      <CustomHeader 
        navigation={props.navigation} //call props.navigation in component
        text = "The Five Components of 5G"
      />  
      <View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../content/mmWaves.jpeg')}/> 
          <Text style={styles.title}>Millimeter Waves</Text>
          <Text>
            Today, most waves are transmitted on a centimeter wavelength. The only things that utilize the millimeter wavelength
            are satallites. This means that there is much less traffic for a 5G network to operate on, allowing it to have a higher
            capacity.
          </Text>
          <Text>
            The problem with operating on a such a short wavelength however, is that obstacles can cause interference much easier. If 
            there is a wall between a device and the 5G cell, the signal strength will drastically decrease. The current range of a 4G
            tower can span several miles, while the range of a 5G cell is only up to a couple hundred meters.
          </Text>
        </View>

        <View style={styles.container}>
          <Image style={styles.image} source={require('../content/smallCells.jpeg')}/> 
          <Text style={styles.title}>Small Cells</Text>
          <Text>
            Because the range of a single 5G cell is so short, a 5G network will require a lot of very small cells to cover an area. 
            The advantages of having a bunch of small cells is that there are more access points meaning a higher network capacity, and 
            the antennas are smaller so the cells are easier to place.
          </Text>
        </View>
        
        <View style={styles.container}>
          <Image style={styles.image} source={require('../content/massiveMIMO.jpeg')}/> 
          <Text style={styles.title}>Massive MIMO</Text>
          <Text>
            Massive MIMO stands for massive multiple input, multiple output. This basically means that a single cell has the capability
            to utilize a bunch of antennas at once. Where as before, a single cell would have about a dozen antennas, a 5G cell will
            have about 100 which again increases the capacity of the network.
          </Text>
        </View>
        

        <View style={styles.container}>
          <Image style={styles.image} source={require('../content/beamforming.jpeg')}/> 
          <Text style={styles.title}>Beamforming</Text>
          <Text>
            Beamforming is a technique to direct a signal using multiple antennas. When two antennas transmit waves on the same frequency
            they can hit eachother and cause interruption. These interruptions can boost or weaken a signal. So, if a cell can transmit 
            signals at the right time, they can purposefully direct a more powerful signal towards a desired device.
          </Text>
        </View>
        

        <View style={styles.container}>
          <Image style={styles.image} source={require('../content/fullDuplex.jpeg')}/> 
          <Text style={styles.title}>Full Duplex</Text>
          <Text>
            Full duplex is the ability to transmit and receive signals on the same frequency. This effectively doubles the capacity of a cell.
          </Text>
        </View>

      </View>

      <View style={styles.line}/>
      

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
    width: 50,
    height: 50
  }
});