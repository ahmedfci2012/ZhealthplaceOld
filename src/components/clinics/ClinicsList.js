import React from 'react';
import {  Dimensions , View, FlatList, Image} from 'react-native';
import {  Content, Container, Badge, Icon , Input, Button, Text, ListItem, Left,Right,Radio} from 'native-base';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");


 class ClinicsList extends React.Component{


  render(){

    return(
  <View style={{
    flex:1,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:5,
    }}>

{this.props.Clinics_.map((item,index)=>

<View style={{
        flex:1,
        borderWidth:1,
        borderColor:'#0000003D',
        borderRadius:10,
        paddingRight:10,
        paddingLeft:10,
        marginBottom:10
        }}
        key={item.id}
        >


        <View
            style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:10,
            }}
            >
            <Image 
            source={{
            uri:"https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-9/92547252_2895059437254610_303979630384119808_o.png?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeFLHrSjd_BPJL6iBZ-TfaeC1Hj9PBjgvuzUeP08GOC-7Ni-JjORRENV6F5uP_xe1r2D7nrFkpznqmQqzhs5j0U-&_nc_ohc=RN4eTAXoXsQAX8hjC-X&_nc_ht=scontent-mrs2-2.xx&oh=8ae140b4f97e92d044d69f44e7ab7b19&oe=5F67FDEC"
            }}
                style={{width:'100%', height:150, backgroundColor:'#FFFFFF3D'}}
                resizeMode='contain'
            />
        </View>

<View style={{paddingRight:5,paddingLeft:5}}>

<View style={{flex:1}}>
        <Text style={{fontSize:18,color:'gray',}}>
                Name :   {item.registeredName}
        </Text>

    </View>

<View style={{flexDirection:'row', alignItems:'center', paddingTop:5, flexWrap:'wrap'}}>

    <View style={{flex:2}}>
        <Text style={{fontSize:18,color:'gray',}}>
                Services:
        </Text>

    </View>

    <View style={{flex:3, flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
                {item.clinicOfferedServices.map((service, i)=>

                <Badge  
                    key={i}
                    style={{ backgroundColor: '#6AA53C', margin: 3, maxWidth: 150 ,height:20, paddingLeft:0, paddingRight:0}}>
                    <Text style={{ color: 'white', margin: 5, fontSize: 11 }} numberOfLines={1}>
                    {service.name} 
                    </Text>
                </Badge>
                )}
    </View>

</View>


<View style={{flexDirection:'row', alignItems:'center',paddingTop:5}}>

    <View style={{flex:2}}>
        <Text style={{fontSize:18,color:'gray'}} numberOfLines={1}>
            Specialization:
        </Text>

    </View>

    <View style={{flex:3, flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>

    {item.clinicSpecialisations.map((special, j)=>

                <Badge  
                    key={j}
                    style={{ backgroundColor: '#6AA53C', margin: 3, maxWidth: 150 ,height:20, paddingLeft:0, paddingRight:0}}>
                    <Text style={{ color: 'white', margin: 5, fontSize: 11 }} numberOfLines={1}>
                    {special.name} 
                    </Text>
                </Badge>
                 
                )}
    </View>

</View>


<View style={{flex:1 , flexDirection:'row', alignItems:'center', paddingTop:5, }}>
    <View style={{flex:2}}>
        <Text style={{fontSize:18,color:'gray',}}>
            Ammenties:
        </Text>
    </View>
    <View style={{flex:3, flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
    {item.clinicAmmenties.map((amm, k)=>
            <Badge  
                key={k}
                style={{ backgroundColor: '#6AA53C', margin: 3, maxWidth: 150 ,height:20, paddingLeft:0, paddingRight:0}}>
                <Text style={{ color: 'white', margin: 5, fontSize: 11 }} numberOfLines={1}>
                {amm.name} 
                </Text>
            </Badge>
)}
    </View>
</View>


<View style={{flex:1, flexDirection:'row', marginTop:5, alignItems:'center'}}>
<View style={{flex:1}}>  
<Text style={{fontSize:18, color:'gray'}}>Phone:</Text>
</View>
<View style={{flex:3}}> 
<Text style={{fontSize:13, color:'gray'}}>{item.phone}</Text>
</View> 
</View>

<View style={{ flex: 1, flexDirection: "row", marginTop: 5, alignItems:'center' }}>
<View style={{flex:1}}>  
<Text style={{fontSize:18, color:'gray'}}>Location:</Text>
</View>


<View style={{flex:3}}> 
<Text style={{fontSize:13, color:'gray'}}>
   {item.country} 
   {"\n"}{item.city} 
   {"\n"}{item.physicalStreetAddress}
      
</Text>
</View>
</View>



<View style={{ flex:1,  flexDirection: 'row' , alignItems:'center'}}>
<View style={{flex:3}}>  
<Text style={{ fontSize:18, color:'gray', }}>Number of Physicians: {item.numberOfPhysicians}</Text>
</View>
<View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}> 
<Button transparent style={{justifyContent:'flex-end'}} 
onPress={() => this.props.navigation.navigate('Physicians', { id: item.id})}>
<Text style={{color: 'blue', fontSize: 13}}>View</Text>
</Button>
</View>

</View>  

</View>
</View>

)}


</View>

)}
}



export default ClinicsList;