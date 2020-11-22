import React, { useState } from "react";
import { View, ScrollView,StyleSheet, Text, Image } from "react-native";

import CustomHeader from "../components/CustomHeader";




export const FuturePage = props => {
  return (
    <ScrollView>
      <CustomHeader 
        navigation={props.navigation} //call props.navigation in component
        text = "The Future of 5G"
      />  
      <View>

        {/* opportunities */}
        <View style={styles.container}>
          <Text style={styles.title}>Opportunites</Text>
          <Text>
            The two major technological advancements that 5G makes possible are smart cities and smart factories. The development of a smart city or factory means
            its major dependence on a network. For example, a smart city will have public transit systems entirely connected to and run through
            the 5G network. Buses could theoretically get live updates on the state of traffic and traffic lights
            and dynamically find the fastest routes somewhere. 
          </Text>
          <Text>
            I think the best way to get there is through the investment into the infrastructure. We are already seeing companies putting up
            cells around major cities, but city, state, and national governments need to invest in some this development because it will 
            bring so much to the city in the near future. I think we are in an age where connection to the internet is a necessity
            and should be provided, at least in part, by the state.
          </Text>
        </View>

        {/* threats */}
        <View style={styles.container}>
          <Text style={styles.title}>Risks</Text>
          <Text>
            One risk that comes directly from the development and implementation of 5G is the loss of jobs. While an automated public transit 
            system might run more efficiently, it means there will no longer be a need for bus drivers.
          </Text>
          <Text>
            The other, more threatening risk that comes with the development of 5G is the possibility for abuse of the networks capabilities. For 
            example, a surveillance state. The intention could be viewed as a positive way to help keep citizens safe. With this however, comes the 
            debate of the right to privacy, as well as the potential for an entity in control of the surveillance to abuse the power. 
          </Text>
          <Text>
            Unfortunately, I do not know if there is much of a solution to the pure loss of jobs. However, there are legal safeguards that a government
            needs to be held accountable for regarding the abuse of power.
          </Text>
        </View>

        {/* challenges */}
        <View style={styles.container}>
          <Text style={styles.title}>Challenges</Text>
          <Text>
            The major challenge we face currently is the implementation and building of such a massive network. Because 5G utlizes small cell
            technology, the physical infrastructure of the network is going to be massive and expensive. With this also comes the maintenance
            of such a complex network. The way to handle such a massive network is to implement in stages. There needs to be a large scale 
            plan of implementation so that the network can be maintained. 
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>What do we do?</Text>
          <Text>
            Connection to the internet is a necessity in todays world. Employees cannot do their work, and students cannot complete their studies 
            without it. The obvious answer to providing this commodity to everyone is government involvement. To what extent this should be, I 
            do not know. But, it does need to be realized that connection to the internet should be as common as electricity, and with a network 
            as powerful as 5G, I think as a society we are capable.
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