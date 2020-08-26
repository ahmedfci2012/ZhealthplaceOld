import React from 'react';
import CalendarStrip from "react-native-calendar-strip";
import {  Dimensions , View, SafeAreaView, TouchableOpacity} from 'react-native';
import {  Content, Container, Body, Icon , Input, Button, Text, ListItem, Left,Thumbnail,Radio} from 'native-base';
import { ReactNativeModal } from "react-native-modal";
import moment from "moment";

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

import Footer from '../Footer';

const TIMES = [
  { time: "08:00", available: false },
  { time: "09:00", available: false },
  { time: "10:00", available: true },
  { time: "11:00", available: true },
  { time: "12:00", available: false },
  { time: "13:00", available: true },
  { time: "14:00", available: true },
  { time: "15:00", available: false },
  { time: "16:00", available: true },
  { time: "17:00", available: false },
  { time: "18:00", available: true },
  { time: "19:00", available: false },
  { time: "20:00", available: false },
  { time: "21:00", available: true },
  { time: "22:00", available: false },
  { time: "23:00", available: true }
];

 class Booking extends React.Component{

   
  state={
    tab:1,
    isVisible:false,
    selectedTime:"",
    selectedDate:TODAY
  }

  onDismissModal = ()=>{
    this.setState({
      isVisible:false
    })
  }

  onTimeSelected = (item)=>{
    console.log(item);
    this.setState({
      selectedTime:item.time,
      isVisible:true
    })
  }
  setSelectedDate = (date)=>{
    this.setState({
      selectedDate:date
    })
  }

  confirm=()=>{
    this.props.navigation.navigate("Clinics");
  }
  render(){
     
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
        onDateSelected={(date) => this.setSelectedDate(date)}
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
              
              <Text>Prof. Dr. Zafer KESKİN</Text>
            </View>
            <View style={{flexDirection:'row',}}>
              <Icon 
               name="star"
               type="MaterialIcons"
               style={{
                 color:'orange',
                 fontSize:20
               }}
              />
              <Icon 
               name="star"
               type="MaterialIcons"
               style={{
                 color:'orange',
                 fontSize:20
               }}
              />
              <Icon 
               name="star"
               type="MaterialIcons"
               style={{
                 color:'orange',
                 fontSize:20
               }}
              />
               
              <Icon 
               name="star"
               type="MaterialIcons"
               style={{
                 color:'orange',
                 fontSize:20
               }}
              />
            </View>

            

            <Text note numberOfLines={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
             

          </Body>
           
          </ListItem>



          <View
            style={{
              height:1,
              backgroundColor:'#fafafc'
            }}
    />

           
       <View
          style={{
            flex: 1, marginTop:30,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center'
          }}
       >    
       {TIMES.map((item, index)=>
        
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
          opacity: item.available ? 1 : 0.4
          }
        }
        disabled={!item.available}
        onPress={() =>
          this.onTimeSelected({ ...item })
        }
      >
        <Text style={{color: 'grey',
          fontWeight: "600"}}>{item.time}</Text>
      </TouchableOpacity>       


        )}
        
        
        </View>
        



        <ReactNativeModal
          isVisible={this.state.isVisible}
          swipeDirection={"down"}
          style={{justifyContent: "flex-end",
          margin: 0}}
          onSwipeComplete={this.onDismissModal}
          onBackdropPress={this.onDismissModal}
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

            }}>{this.state.selectedTime} </Text>
            <Text style={{
               
                fontSize: 15,
                fontWeight: "600",
                marginTop: 12,
                color: 'black'
              
              
            }}>
              { moment(this.state.selectedDate).format("LL")}
              
            </Text>
          </View>
          
          <TouchableOpacity
            style={ { paddingHorizontal: 22,
              paddingVertical: 10,
              backgroundColor: '#60b6ca',
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center"}}
      onPress={this.confirm}
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
      onPress={this.onDismissModal}
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
 tab= {this.state.tab} 
 navigation={this.props.navigation}/>    

</Container>
)}
}



export default Booking;