import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {  Text, View } from 'react-native';


import Clinics from './src/components/clinics';
import Doctors from './src/components/doctors';
import Booking from './src/components/booking';
import Home from './src/components/home';


import FlashMessage from "react-native-flash-message";

const navOptionHandler = (navigation)=>({
  headerShown:false
})    


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
  <Stack.Navigator>
  
  
  <Stack.Screen name="Home" component={Home} 
    />
    <Stack.Screen name="Clinics" component={Clinics}
    options={{
      headerShown:false
    }}
    />
    <Stack.Screen name="Physicians" component={Doctors} 
    />
    <Stack.Screen name="Booking" component={Booking} 
    />


    
  </Stack.Navigator>

   <FlashMessage position="top"  />  
  

</NavigationContainer>
  
  );
}







 
