import React, { useState } from 'react';
import {  Dimensions , View, FlatList, Image} from 'react-native';
import {  Content, Container, List, ListItem, Thumbnail, Left, Body, Right , Button, Text, Icon, Badge} from 'native-base';
import useFetch from "react-fetch-hook";

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");
import Footer from '../Footer';
import PhysicansList from './PhysicansList';

const URLPhysician="https://medicalapp-api.azurewebsites.net/api/Physician/GetClinicPhysicians/";

export default function Doctors(props) {

  const { id } = props.route.params;
  const [tab, changeTap] = useState(1);
  const physician = useFetch(URLPhysician+id);

  
    return(
        <Container>
{physician.isLoading ? 
<Content>
  <View style={{ height:height/2,justifyContent:'center', alignItems:'center',}}>
    <Text> Loading... </Text>
  </View>
</Content>  
:   
<Content>
       
<PhysicansList navigation = {props.navigation} physicians_= {physician.data} clinicId={id} />

 </Content>
}
<Footer 
 tab= {tab} 
 navigation={props.navigation}
 changeTap={changeTap}
 />    

</Container>
)}
