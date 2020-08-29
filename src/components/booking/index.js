import React, { useState } from 'react';
import CalendarStrip from "react-native-calendar-strip";
import {  Dimensions , View, SafeAreaView, TouchableOpacity} from 'react-native';
import {  Content, Container, Body, Icon , Input, Button, Text, ListItem, Left,Thumbnail,Radio} from 'native-base';
import { ReactNativeModal } from "react-native-modal";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { showMessage, hideMessage } from "react-native-flash-message";

import moment from "moment";
import useFetch from "react-fetch-hook";
import axios from 'react-native-axios';

const URL="https://medicalapp-api.azurewebsites.net/api/Physician/GetPhysicianAvailableTimes/";
const URLAviliable = "https://medicalapp-api.azurewebsites.net/api/Physician/GetTimeSlotsOnSpecificDate?";

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

import Footer from '../Footer';
export default function Booking(props) {

   const { item,clinicId  } = props.route.params;
  // const times = useFetch(URL+item.systemUserID);  
   
  // const clinicID = 1;
  // const physicianId= 1;

  const [tab, changeTap] = useState(1);
  const [isVisible, onDismissModal] = useState(false);
  const [selectedTime, onTimeSelected] = useState("");
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [flahMessage, srtFlahMessage] = useState(0);

  
  const physicianId= item.systemUserID;

  const availableTimes = useFetch(URLAviliable+"physicianID="+physicianId+"&clinicID="+clinicId+"&date="+moment(selectedDate).format('YYYY-MM-DD'));


const timeSelect = ({from})=>{
  let tt = "0"+from+":00";
    if(from < 10){
      onTimeSelected(tt);  
    }else{
      onTimeSelected(from+":00");
    }
    onDismissModal(true)
  }

  const dateSelect = (date)=>{
   // console.log(times.data);
   setSelectedDate(date);
  
  }


  const confirm=()=>{
     
  let PatientVisitInputDto =   {
  "patientID": 2,
  "clinicID": clinicId,
  "physicianID": physicianId, 
  "visitDateTime": moment(selectedDate).format("YYYY-MM-DDT"+selectedTime)+":00.000Z",
  "visitFee": item.consultationPrice,
  "comment": "No comment for you"
  }
   
axios.post('https://medicalapp-api.azurewebsites.net/api/Patient/BookVisit/', {
  ...PatientVisitInputDto
})
.then(function (response) {

  showMessage({
    message: "Successfully Booking at "+moment(selectedDate).format('dddd YYYY-MM-DD'),
    type: "success",
  });
 
  props.navigation.navigate('Home');

})
.catch(function (error) {
  console.log(error);
});

}


     
    return(
        <Container>
  
  
        <Content>
       
        <CalendarStrip
        calendarAnimation={{ type: "sequence", duration: 30 }}
        style={{ height: 60,
          marginHorizontal: 4, marginTop:30}}
        // calendarHeaderStyle={{
        //   display: "none"
        // }}
        onWeekChanged={(date) => {
           
        }}
        onDateSelected={
          
          (date) =>  dateSelect(date)
        
        }

        dateNumberStyle={{ color: 'gray' }}
        dateNameStyle={{ color: 'gray' }}
        highlightDateNumberStyle={{
          color: '#60b6ca'
        }}
        highlightDateNameStyle={{
          color: '#60b6ca'
        }}
        disabledDateNameStyle={{ color: "grey" }}
        disabledDateNumberStyle={{ color: "grey" }}
      />
          



          <ListItem thumbnail noBorder>
          <Left>
            <Thumbnail square source={{ uri: "https://github.com/publsoft/publsoft.github.io/raw/master/projects/medical-demo/assets/images/doctor1.jpg"}} />
          </Left>
          <Body>
               
            <View style={{flexDirection:'row', alignItems:'center'}}>
              
              <Text>{item.systemUser.firstName}</Text>
              <Text>{item.systemUser.middleName}</Text>
              <Text>{item.systemUser.lastName}</Text>
            </View>
             
            <View style={{flexDirection:'row',}}>
            <AirbnbRating
              showRating={false}
              count={5}
              size={17}
              isDisabled
              selectedColor={"orange"}
              defaultRating={5}
            />
            </View>
            


            <Text note numberOfLines={1}>about about about about about about aboutabout about about about about about aboutabout about about about about about about </Text>
           
             

          </Body>
           
          </ListItem>



          <View
            style={{
              height:1,
              backgroundColor:'#fafafc'
            }}
    />


 { !availableTimes.isLoading?
 <View>
 {availableTimes.data.Available?
           
        <View
          style={{
            flex: 1, marginTop:30,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center'
          }}
       >    


       { availableTimes.data.Available.map((item, index)=>
        
        <TouchableOpacity
        key={index}
        style={ {
          backgroundColor: '#fafafc',
          height: 30,
          width: width / 4 - 8 - 6,
          margin: 4,
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0.3,
          borderColor: "#c2c2c2",
          opacity:  1 
          }
        }
        //disabled={!item.available}
        onPress={ ()=> timeSelect({...item}) }
      >
        <Text style={{color: 'grey',
          fontWeight: "600"}}>{item.from}:00</Text>
      </TouchableOpacity>       
      )}
        
        { availableTimes.data.Booked.map((item, index)=>
        
        <TouchableOpacity
        key={index}
        style={ {
          backgroundColor: '#fafafc',
          height: 30,
          width: width / 4 - 8 - 6,
          margin: 4,
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0.3,
          borderColor: "#c2c2c2",
          opacity: 0.4
          }
        }
        disabled
        onPress={ ()=> timeSelect({...item}) }
      >
        <Text style={{color: 'grey',
          fontWeight: "600"}}>{item.from}:00</Text>
      </TouchableOpacity>       
      )}
        </View>
       

:
<View style={{ flex:1, height:height/2,justifyContent:'center', alignItems:'center'}}> 
  <Text>
  No Slots Available In {moment(selectedDate).format('dddd YYYY-MM-DD')}
  </Text>
  </View>

}
</View>:
<View style={{ flex:1, height:height/2,justifyContent:'center', alignItems:'center'}}> 
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
            color: 'black'
          }}>
            Appoinment Details
          </Text>
          <View style={{ paddingVertical: 16 }}>
            <Text style={{ color: 'gray' }}>
               Doctor 
            </Text>
            <Text style={{ fontSize: 15,
    fontWeight: "600",
    color: 'black',
    marginTop: 4 }}>Prof. Dr. Zafer KESKİN</Text>
            <Text style={{ 
fontSize: 13,
color: 'gray',
fontWeight: "600",
marginTop: 2

            }}> Clinic Manager </Text>
          </View>
         
         
          <View style={{

   paddingVertical: 36,
  marginBottom: 12,
  alignItems: "center"

          }}>
            <Text style={{

  fontSize: 62,
  fontWeight: "200",
  color: 'black',
  marginTop: 4
 
            }}>{moment().format(selectedTime)} </Text>
            <Text style={{
               
                fontSize: 15,
                fontWeight: "600",
                marginTop: 12,
                color: 'black'
              
              
            }}>
              { moment(selectedDate).format("LL")}
              
            </Text>
          </View>
          
          <TouchableOpacity
            style={ { paddingHorizontal: 22,
              paddingVertical: 10,
              backgroundColor: '#60b6ca',
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center"}}
      onPress={confirm}
    >
      <Text
        style={{
          fontWeight: "600", fontSize: 15, color: "white",
    fontWeight: "400"
           
        }}
      >
        CONFIRM
      </Text>
    </TouchableOpacity>


          

    <TouchableOpacity
            style={ { 
              paddingHorizontal: 22,
              paddingVertical: 10,
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor:'grey',
              marginTop:5
            }}
      onPress={()=>onDismissModal(false)}
    >
      <Text
        style={{
          fontWeight: "600", fontSize: 15, color: "grey",
    fontWeight: "400"
           
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
  tab= {tab} 
  navigation={props.navigation}
  changeTap={changeTap}
/>     

</Container>
)
}



