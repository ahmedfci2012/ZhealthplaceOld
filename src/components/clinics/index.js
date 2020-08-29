import React, { useState } from 'react';
import {  Dimensions , View, FlatList, Image} from 'react-native';
import {  Content, Container, Badge, Icon , Input, Button, Text, ListItem, Left,Right,Radio} from 'native-base';
import useFetch from "react-fetch-hook";

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

import ClinicsList from './ClinicsList';
import PhysicansList from './PhysicansList';
import Footer from '../Footer';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const URLClinics = "https://medicalapp-api.azurewebsites.net/api/Clinic/Get/";
const URLPhysician="https://medicalapp-api.azurewebsites.net/api/Physician/Get/";

export default function Clinics(props) {

const [tab, changeTap] = useState(2);
const [clinicCheck, changeCheckClinic] = useState(true);
const [doctorCheck, changeCheckDoctor] = useState(false);

const [searchTerm, setSearchTerm] = React.useState("");

const [isSearch, startSearch] = useState(false);


const physician = useFetch(URLPhysician );
const clinics = useFetch(URLClinics );

const clinics_s= useFetch( URLClinics + searchTerm, {
    depends: [isSearch]
});

const physician_s= useFetch( URLPhysician + searchTerm, {
  depends: [isSearch]
});


const onClickSearch = ()=>{
  startSearch(true);
};

const search = (value)=>{
  console.log(searchTerm);
  setSearchTerm(value);
  startSearch(false);
}


 return(
  <Container>
  <View style={{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f7f7f7'
  }}>
  <Image
      source={ require('../../assets/logog.png')}
          style={{width:'100%', height:50, backgroundColor:'#FFFFFF3D'}}
          resizeMode='contain'
      />
  </View>
 <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 10,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "#E1E1E1B3",
            height: 42,
            backgroundColor: "#E1E1E133"
          }}
        >
          <Icon
            name="search"
            type="MaterialIcons"
            style={{ color: "#00000080", }}
          />
          <Input
            placeholder="Search"
            placeholderTextColor="#00000080"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.passwordInput._root.focus();
            }}
            onChangeText={ (value)=>search(value)}
            value={searchTerm}
            keyboardType="email-address"
            style={{ color: "#000000" }}
            //disabled={disabled}
          />
          <TouchableOpacity>
          <Button style={{ flex:.5, justifyContent:'flex-end', height: 42, }} transparent 
          onPress={ onClickSearch}>
              <Text style={{color: "#000000"}}>Search</Text>
          </Button>
          </TouchableOpacity>
        </View>

<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingBottom:15}}>
         <TouchableOpacity style={{  flexDirection:'row', justifyContent:'flex-start'  }} 
         onPress={
           ()=>{
             changeCheckDoctor(false),
             changeCheckClinic(true)
           }          
          }
           
           >
         <View style={{flexDirection:'row', alignItems:'center'}}
         >
             <Radio 
                  selected={clinicCheck}
             />
             <Text style={{marginLeft:10}}>Clinics</Text>
         </View>
         </TouchableOpacity>

         <TouchableOpacity style={{  flexDirection:'row',justifyContent:'flex-end',  }} onPress={
           
           ()=>{changeCheckClinic(false),changeCheckDoctor(true)
           }
           }>
         <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
             <Radio 
                  selected={doctorCheck}
             />
             <Text style={{marginLeft:10}}>Physicians</Text>
         </View>
         </TouchableOpacity>
</View>

{clinics.isLoading || physician.isLoading||clinics_s.isLoading||physician_s.isLoading ? 
<Content>
  <View style={{ height:height/2,justifyContent:'center', alignItems:'center',}}>
    <Text> Loading... </Text>
  </View>
</Content> 
: 
<Content>
  {isSearch?
  <View>
  {clinicCheck && clinics_s.data?  <ClinicsList navigation = {props.navigation}   Clinics_= { clinics_s.data} />:null}
  {doctorCheck && physician_s.data ?  <PhysicansList navigation = {props.navigation} physicians_= {physician_s.data} />:null}
  </View> 
:
 <View>
{clinicCheck && clinics.data?   <ClinicsList navigation = {props.navigation}   Clinics_= {clinics.data} />:null}
{doctorCheck && physician.data?  <PhysicansList navigation = {props.navigation} physicians_= {physician.data} />:null}
</View>
}
</Content>
}
<Footer 
  tab= {2} 
  navigation={props.navigation}
/>    

</Container>


 );

}