import React from 'react';
import MapView from 'react-native-maps';
import {View} from 'react-native';

const App = () =>( 
<View style={{flex:1}}>
<MapView
    style={{flex:1}}
    reggion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    }}  
        showsUserLocation
        loadingEnabled
    />
</View>
 );

export default App;