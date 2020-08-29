
import React from 'react';
import {  Dimensions , View, FlatList, Image} from 'react-native';
import {  Content, Container, Badge, Icon , Input, Button, Text, ListItem, Left,Right,Radio} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

  
 class Footer extends React.Component{

  render(){
     const { tab } = this.props;
    return(




<View style={{ height:70, flexDirection:'row', justifyContent:'space-around', alignItems:'center', borderTopWidth:.5, borderTopColor:'#0000003D'}}>

<TouchableOpacity onPress={ ()=>( this.props.navigation.navigate("Home"))}>
<View> 
  <Icon type="FontAwesome5" name="home" style={{ color:tab==1?'#60b6ca':'gray', textAlign:'center'}} 
   
  />
  <Text style={{textAlign:'center', color:tab==1?'#60b6ca':'gray',fontSize:11}}> Home </Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=>(this.props.navigation.navigate("Clinics"))
}>
<View>
  <Icon type="MaterialIcons" name="search" style={{ color:tab==2?'#60b6ca':'gray', textAlign:'center'}}
   
  />
  <Text style={{textAlign:'center', color:tab==2?'#60b6ca':'gray',fontSize:11}}> Search</Text>
</View>
</TouchableOpacity>
<TouchableOpacity >
<View>
  <Icon type="FontAwesome5" name="video" style={{ color:tab==3?'#60b6ca':'gray', textAlign:'center'}}
   
  />
  <Text style={{textAlign:'center', color:tab==3?'#60b6ca':'gray',fontSize:11}}> Media </Text>
</View>
</TouchableOpacity>
<TouchableOpacity >
<View>
  <Icon type="FontAwesome5" name="user-alt" style={{ color:tab==4?'#60b6ca':'gray', textAlign:'center'}}
   
  />
  <Text style={{textAlign:'center', color:tab==4?'#60b6ca':'gray',fontSize:11}}> Profile </Text>
</View>
</TouchableOpacity>
<TouchableOpacity >
<View>
  <Icon type="MaterialIcons" name="menu" style={{ color:tab==5?'#60b6ca':'gray', textAlign:'center'}}
   
  />
  <Text style={{textAlign:'center', color:tab==5?'#60b6ca':'gray',fontSize:11}}> Menu </Text>
</View>
</TouchableOpacity>
</View>  


)}
}



export default Footer;