import React from 'react';
import { View, Image, Dimensions, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const CustomMapView = (props) => {

    markers = [
        {latitude: 56.341727, longitude: -2.798898},
        {latitude: 56.340376, longitude: -2.798957},
        {latitude: 56.341122, longitude: -2.793914},
        {latitude: 56.340334, longitude: -2.794096},
        {latitude: 56.338990, longitude: -2.798366},
        {latitude: 56.339439, longitude: -2.795119},
        {latitude: 56.339697, longitude: -2.791264},
        {latitude: 56.340685, longitude: -2.790843},
        {latitude: 56.342128, longitude: -2.803124},
        {latitude: 56.340071, longitude: -2.801922},


    ]

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 56.338909,
                    longitude: -2.798930,
                    latitudeDelta: 0.012,
                    longitudeDelta: 0.012
                }}
                style={styles.mapStyle}
            >
                {markers.map((marker, i) => {
                    return (
                        <Marker  
                            key={i} 
                            coordinate={marker}
                        >
                            <Image style={{ height: 20, width: 20 }} source={require('../content/cellTower.png')} />
                        </Marker>
                    )
                })}
            </MapView>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
    },  
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .5,
      },
  });

export default CustomMapView;