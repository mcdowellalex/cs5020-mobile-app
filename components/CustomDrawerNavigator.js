import React from "react";
import { View, Image } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { StyleSheet } from "react-native";
import {color} from '../globalVariables';

const CustomDrawerNavigator = props => {


  return(
    <View style={styles.container}>
      <Image style={{height:75, width:80}} source={require('../content/5Glogo.jpg')}/> 
      <DrawerItems
        activeTintColor={color}
        iconContainerStyle={styles.icons}
        {...props}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  logo:{
    alignItems:'center'
  },
  icons: {
    width: 30
  }
});

export default CustomDrawerNavigator;