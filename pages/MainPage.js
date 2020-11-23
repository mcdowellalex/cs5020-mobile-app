import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Image, Dimensions } from "react-native";

import CustomHeader from "../components/CustomHeader";
import {Footer} from '../components/Footer';



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
          <Image style={{height:75, width:80}} source={require('../content/5Glogo.jpg')}/> 
          <Text style={styles.title}>What is 5G?</Text>
          <Text>
            5G is the 5th generation of cellular network technology. Currently, the worlds cell towers run 3G and 4G, but with 
            the growing demand for a higher spectral efficiency (faster download speeds and a more capacity), comes the need 
            to improve the wireless network. 
          </Text>
          <Text>
            There are 5 main components of 5G that will help the technology provide higher spectral efficiency. More detail on 
            the 5 core components of 5G can be found 
            <Text style={{color:'blue'}} onPress={() => props.navigation.navigate("FiveComponentsPage")}> here</Text>.
          </Text>
        </View>

        {/* summary of the state of the art */}
        <View style={styles.container}>
          <Image style={{height:50, width:250}} source={require('../content/SOTA.png')}/> 
          <Text style={styles.title}>State of the Art of 5G</Text>
          <Text>
            The current state of 5G technological advancement is that we have all of the main 5 components developed enough
            to be usable. Some parts are somewhat unstable, and the infrastructure needs to be well planned before it is fully
            built out. Cities such as NYC, LA, Miami, London, Edinburgh, and several more already have some 5G cells put up. 
          </Text>
          <Text>
            The next major step is to strategize, invest, and build out the network as well as develop compatability into
            the next set of phones. We should not see much new development in terms of the technology of 5G. The five core 
            components are well defined and developed, they just need to be stabilized. 
          </Text>
          <Text>
            More detail on the state of the art can be found 
            <Text style={{color:'blue'}} onPress={() => props.navigation.navigate("SOTAPage")}> here</Text>.
          </Text>
        </View>

        {/* summary of opportunities and challenges of 5G */}
        <View style={styles.container}>
          <Text style={styles.title}>Challenges, Threats, and Opportunities</Text>
          <Text>
            We are currently facing a lot of challenges such the scale and infrastructure of the network. Because the technology 
            requires a bunch of small cells it will be extremely expensive. However, there are several opportunities such as 
            smart cities and smart factories. IoT is going to be integrated into every aspect of life, for better or worse. 
            
          </Text>
          <Text>
            For more details on what the future of 5G might look like and how we should get there go
            <Text style={{color:'blue'}} onPress={() => props.navigation.navigate("FuturePage")}> here</Text>.
          </Text>
        </View>

      </View>
      
      <Footer />

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
    marginBottom:10,
    borderBottomWidth: 0.5,
    borderColor:'#c2c2c2' ,
  },
  lottie: {
    width: 100,
    height: 100
  },
  
});