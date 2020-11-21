import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CustomText = props => ( 
      <Text style={ props.style} onPress={props.onPress}>{props.text}</Text>
  );

  const styles = StyleSheet.create({
  
  });