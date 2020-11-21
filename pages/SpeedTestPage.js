import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Button } from "react-native";

import CustomHeader from "../components/CustomHeader";
import {CustomButton} from '../components/CustomButton';




export const SpeedTestPage = props => {
  const [speedMbps, setSpeedMbps] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  var imageAddr = "https://alexmcdowell.netlify.app/static/itInventory2-5fe52a9bcff2fa73c5f640fd05774926.jpg"; 
  var downloadSize = 2583573; //bytes


  // https://stackoverflow.com/questions/5529718/how-to-detect-internet-speed-in-javascript#:~:text=length%3B%20var%20time%20%3D%20(endTime,send()%3B
  function InitiateSpeedDetection() {
      console.log("Loading the image, please wait...");
      window.setTimeout(MeasureConnectionSpeed, 1);
  };    

  if (window.addEventListener) {
      window.addEventListener('load', InitiateSpeedDetection, false);
  } else if (window.attachEvent) {
      window.attachEvent('onload', InitiateSpeedDetection);
  }

  function MeasureConnectionSpeed() {
      var startTime, endTime;
      var download =  new Image();
      download.onload = function () { //after the image has been loaded, get the end time
          endTime = (new Date()).getTime();
          showResults();
      }
      
      
      startTime = (new Date()).getTime();
      var cacheBuster = "?nnn=" + startTime;
      download.src = imageAddr + cacheBuster;
      
      function showResults() {
          var duration = (endTime - startTime) / 1000;
          var bitsLoaded = downloadSize * 8;
          var speedBps = (bitsLoaded / duration).toFixed(2);
          var speedKbps = (speedBps / 1024).toFixed(2);
          var Mbps = (speedKbps / 1024).toFixed(2);
          console.log([
              "Your connection speed is:", 
              speedBps + " bps", 
              speedKbps + " kbps", 
              Mbps + " Mbps"
          ]);
          setSpeedMbps(Mbps);
          setIsVisible(true);
      }
  }

  return (
    <ScrollView>
        <CustomHeader 
            navigation={props.navigation} //call props.navigation in component
            text = "A neat little speed test"
        />  
        <View style={styles.container}>
            <CustomButton
                text = 'test speed'
                onPress = {() => InitiateSpeedDetection()}
            />
        </View>

        {isVisible ? 
            //if someone has hit the button
            <Text style={[styles.speed, {fontSize: 20}]}>Download Speed: {speedMbps} Mbps</Text> 
            :
            //if button has not been hit yet
            <View style={{margin:13}}/>
        }
      
        <View style={styles.line} />
        <Text style={{margin:10}}>
            {'This speed test is based off of the time it takes to load an image from my personal site.'}
        </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        // marginTop:40,
        marginBottom:40,
        alignItems:'center'
    },
    line:{
        marginTop:40,
        borderBottomWidth: 0.5,
        borderColor:'#c2c2c2' ,
    },
    speed:{
        alignSelf:'center'
    }

});