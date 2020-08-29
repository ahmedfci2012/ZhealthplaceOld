import React, { useState } from 'react';
import CalendarStrip from "react-native-calendar-strip";
import {  Dimensions , View, SafeAreaView, TouchableOpacity} from 'react-native';
import {  Content, Container, Body, Icon , List, Button, Text, ListItem, Left,Thumbnail,Badge} from 'native-base';
import { ReactNativeModal } from "react-native-modal";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { showMessage, hideMessage } from "react-native-flash-message";

import moment from "moment";
import useFetch from "react-fetch-hook";
import axios from 'react-native-axios';

const URL="https://medicalapp-api.azurewebsites.net/api/Visit/GetPatinetVisits/2";

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

import Footer from '../Footer';
export default function Home(props) {

   const visites = useFetch(URL);  
   
  // const clinicID = 1;
  // const physicianId= 1;

  const [tab, changeTap] = useState(1);
  const [isVisible, onDismissModal] = useState(false);




     
    return(
        <Container>
  
  
        <Content>
       
         
          
{!visites.isLoading?

      <List >
        <ListItem noBorder>
          <Text>
            List Of Patient Visites
          </Text>
        </ListItem>
          {visites.data.map((item,index)=>
            
            <ListItem thumbnail key={index} button onPress={()=>onDismissModal(true)}>
            <Left>
              <Thumbnail square source={{ uri: "https://github.com/publsoft/publsoft.github.io/raw/master/projects/medical-demo/assets/images/doctor1.jpg"}} />
            </Left>
            <Body>
                 
              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text >Clinic: <Text style={{color:'grey'}}>{item.clinic}</Text></Text>
              </View>

               <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Physician: <Text style={{color:'grey'}}>{item.physician}</Text></Text>
              </View>

              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Date : <Text style={{color:'grey'}}>{moment(item.visitDateTime).format('dddd DD/MM/YYYY') }</Text></Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Time : <Text style={{color:'grey'}}>{moment(item.visitDateTime).format('HH:00') }</Text></Text>
              </View>

              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Fee : <Text style={{color:'grey'}}>{item.visitFee}$</Text></Text>
              </View>
              
              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Notes: <Text style={{color:'grey'}}>{item.comment?item.comment:"there is no notes"}</Text></Text>
              </View>

              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>status:</Text>
                <Badge  
                style={{ backgroundColor: '#6AA53C', margin: 3, maxWidth: 150 ,height:20, paddingLeft:0, paddingRight:0}}>
                <Text style={{ color: 'white', margin: 5, fontSize: 11 }} numberOfLines={1}>
                {item.visitStatus}
                </Text>
            </Badge>
              </View>

              
  
            </Body>
             
            </ListItem>
  
            )}
               </List>

      :
      <View style={{height:height/2, justifyContent:'center', alignItems:'center'}}>

        <Text>
          Loading...
        </Text>
      </View>  

}
 

         <ReactNativeModal
          isVisible={isVisible}
          swipeDirection={"down"}
          style={{justifyContent: "flex-end",
          margin: 0}}
          onSwipeComplete={()=>onDismissModal(false)}
          onBackdropPress={()=>onDismissModal(false)}
       >
      <SafeAreaView style={{ 

        backgroundColor: "white",
        borderTopStartRadius: 24,
        borderTopEndRadius: 24
      }}>
        <View style={{
          padding: 24,
          paddingBottom: 4
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: "600",
            color: 'black',
            paddingBottom:30
          }}>
            Visit Call
          </Text>
          
         
         
           
          <TouchableOpacity
            style={ { 
              
              paddingHorizontal: 22,
              paddingVertical: 10,
              backgroundColor: 'green',
              borderRadius: 4,
              alignSelf: "center",
              justifyContent: "center",
              borderRadius:50,
              width:200
            }}
       onPress={()=>alert("Calling Part")}
    >
      <Text
        style={{
          fontWeight: "600", fontSize: 15, color: "white",
          fontWeight: "bold",
          textAlign:'center'
           
        }}
      >
        CALL
      </Text>
    </TouchableOpacity>


    <TouchableOpacity
            style={ { 
              
              paddingHorizontal: 22,
              paddingVertical: 10,
              borderRadius: 4,
              alignSelf: "center",
              justifyContent: "center",
              borderRadius:50,
              width:200,
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor:'grey',
              marginTop:20,
              marginBottom:20
            }}
      //onPress={confirm}
    >
      <Text
        style={{
          fontWeight: "bold",
          textAlign:'center', fontSize: 15, color: "grey",
           
        }}
      >
        CANCEL
      </Text>
    </TouchableOpacity>


         </View>
      </SafeAreaView>
    </ReactNativeModal>
    
    

  </Content>
  
  

<Footer 
  tab= {1} 
  navigation={props.navigation}
/>     

</Container>
)
}



