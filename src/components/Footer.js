
import React from 'react';
import {  Dimensions , View, FlatList, Image} from 'react-native';
import {  Content, Container, Badge, Icon , Input, Button, Text, ListItem, Left,Right,Radio} from 'native-base';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

  
 class Footer extends React.Component{

  render(){
     const { tab } = this.props;
    return(




<View style={{ height:70, flexDirection:'row', justifyContent:'space-around', alignItems:'center', borderTopWidth:.5, borderTopColor:'#0000003D'}}>
<View> 
  <Icon type="FontAwesome5" name="home" style={{ color:tab==1?'#60b6ca':'gray', textAlign:'center'}} 
   onPress={()=>this.props.changeTap(1)}
  />
  <Text style={{textAlign:'center', color:tab==1?'#60b6ca':'gray',fontSize:11}}> Home </Text>
</View>

<View>
  <Icon type="AntDesign" name="calendar" style={{ color:tab==2?'#60b6ca':'gray', textAlign:'center'}}
   onPress={()=>this.props.changeTap(2)}
  />
  <Text style={{textAlign:'center', color:tab==2?'#60b6ca':'gray',fontSize:11}}> Calendar</Text>
</View>

<View>
  <Icon type="FontAwesome5" name="video" style={{ color:tab==3?'#60b6ca':'gray', textAlign:'center'}}
   onPress={()=>this.props.changeTap(3)}
  />
  <Text style={{textAlign:'center', color:tab==3?'#60b6ca':'gray',fontSize:11}}> Media </Text>
</View>

<View>
  <Icon type="FontAwesome5" name="user-alt" style={{ color:tab==4?'#60b6ca':'gray', textAlign:'center'}}
   onPress={()=>this.props.changeTap(4)}
  />
  <Text style={{textAlign:'center', color:tab==4?'#60b6ca':'gray',fontSize:11}}> Profile </Text>
</View>

<View>
  <Icon type="MaterialIcons" name="menu" style={{ color:tab==5?'#60b6ca':'gray', textAlign:'center'}}
   onPress={()=>this.props.changeTap(5)}
  />
  <Text style={{textAlign:'center', color:tab==5?'#60b6ca':'gray',fontSize:11}}> Menu </Text>
</View>
</View>  


)}
}



export default Footer;