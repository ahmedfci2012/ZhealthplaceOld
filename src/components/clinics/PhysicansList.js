import React from 'react';
import {  Dimensions , View, FlatList, Image} from 'react-native';
import {  Content, Container, List, ListItem, Thumbnail, Left, Body, Right , Button, Text, Icon, Badge} from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

import Footer from '../Footer';
 


 class PhysicansList extends React.Component{

  state={
    tab:1
  }
  
  render(){
    return(
         
       
        <List>
    {this.props.physicians_.map( ( item , index)=>

          <ListItem thumbnail key={item.systemUserID}>
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

            <View style={{flex:1 , flexDirection:'row', alignItems:'center', paddingTop:5, }}>
    <View style={{flex:2}}>
        <Text style={{fontSize:14,color:'gray',}}>
        Specialization:
        </Text>
    </View>
    <View style={{flex:3, flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
    {item.physicianSpecialisations.map((special, k)=>
            <Badge  
                key={k}
                style={{ backgroundColor: '#6AA53C', margin: 3, maxWidth: 150 ,height:20, paddingLeft:0, paddingRight:0}}>
                <Text style={{ color: 'white', margin: 5, fontSize: 11 }} numberOfLines={1}>
                {special.name} 
                </Text>
            </Badge>
)}
    </View>
</View>
            <Text note numberOfLines={3}>about about about about about about aboutabout about about about about about aboutabout about about about about about about </Text>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}> 
                <Text note style={{ fontSize: 14}}>Session Fee:  {item.consultationPrice}$ </Text>
                <Button transparent style={{justifyContent:'flex-end'}} onPress={() => this.props.navigation.navigate('Booking')}>
                <Text style={{color: 'blue', fontSize: 13, color:'orange'}}>Book</Text>
                </Button>
           </View>

          </Body>
           
          </ListItem>
)}
            
            
 

       </List>
   
          
  
)}
}



export default PhysicansList;