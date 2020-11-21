import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
// import {CustomImage} from '../components/CustomImage';
import {color} from '../globalVariables'


const CustomHeader = (props) => {
  return( 
    <View style={{height: 80+Constants.statusBarHeight, paddingTop:Constants.statusBarHeight, marginBottom:40}}>
      <View style={{height:15, backgroundColor:color}}/>
      <View style={styles.container}> 
        <Ionicons
          name="md-menu"
          size={40}
          onPress={() => props.navigation.openDrawer()}
          style={styles.hamburger}
        />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  )};

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      borderBottomWidth: 0.75,
      display:'flex'
    },
    hamburger: {
      margin:15,
      width:'15%',
      alignSelf:'flex-start'

    },
    text: {
      alignSelf:'center',
      fontSize:18
    }
  });

export default CustomHeader;