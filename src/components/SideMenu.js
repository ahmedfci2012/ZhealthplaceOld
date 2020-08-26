import React from 'react';
import {  Text, List, ListItem, Icon,Left } from 'native-base';
import {View, Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
//import {IMAGE} from '../constants/Image';

export default class SideMenu extends React.Component {
  render() {
    return (     
        <SafeAreaView style={{flex:1, backgroundColor:'#33d9cf'}}>
               
            
              
          
            <ScrollView > 
                

                <TouchableOpacity style={{backgroundColor:'#FFFFFF30'}} >
                    <ListItem   onPress={()=>this.props.navigation.navigate('ShopHome')}   noBorder>
                        
                        <Icon
                            name="home"
                            type="MaterialIcons"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > الصفحة الرئيسية</Text>
                    </ListItem>
                </TouchableOpacity>

                <TouchableOpacity >
                    <ListItem  onPress={()=>this.props.navigation.navigate('Main')}   noBorder>
                        
                        <Icon
                            name="home"
                            type="MaterialIcons"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > screen 1 </Text>
                    </ListItem>
                </TouchableOpacity>

                <TouchableOpacity >
                    <ListItem  onPress={()=>this.props.navigation.navigate('Helps')}   noBorder>
                        
                        <Icon
                            name="home"
                            type="MaterialIcons"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > helps </Text>
                    </ListItem>
                </TouchableOpacity>


                <TouchableOpacity >
                    <ListItem  button noBorder onPress={()=>this.props.navigation.navigate('Product')} >
                        
                        <Icon
                            name="product-hunt"
                            type="FontAwesome"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > المنتجات</Text>
                    </ListItem>
                </TouchableOpacity>
                <TouchableOpacity  >
                    <ListItem  button noBorder onPress={()=>this.props.navigation.navigate('Supplier')} >
                        
                        <Icon
                            name="users"
                            type="FontAwesome5"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > الموردين</Text>
                    </ListItem>
                </TouchableOpacity>
                <TouchableOpacity  >
                    <ListItem   button noBorder onPress={()=>this.props.navigation.navigate('Customer')}>
                        
                        <Icon
                            name="users"
                            type="FontAwesome5"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > العملاء</Text>
                    </ListItem>
                </TouchableOpacity>

                <TouchableOpacity  >
                    <ListItem button  noBorder onPress={()=>this.props.navigation.navigate('BillSale')}>
                        
                        <Icon
                            name="money-bill"
                            type="FontAwesome5"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > فواتير البيع</Text>
                    </ListItem>
                </TouchableOpacity>
              


                <TouchableOpacity  >
                    <ListItem button  noBorder  onPress={()=>this.props.navigation.navigate('Customer')}>
                        
                        <Icon
                            name="money-bill"
                            type="FontAwesome5"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > فواتير الشراء</Text>
                    </ListItem>
                </TouchableOpacity>


                


                
                
                
                

            </ScrollView>
            <List>


            <TouchableOpacity>
                    <ListItem  onPress={()=>this.props.navigation.navigate('Enterpoint')} noBorder>
                        
                        <Icon
                            name="settings"
                            type="MaterialIcons"
                            style={{ color: "#FFF", fontSize: 25 }} 
                        />
                        <Text
                            style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }} 
                        > الأعدادات</Text>
                    </ListItem>
                </TouchableOpacity>

                <TouchableOpacity>    
                    <ListItem  onPress={()=>this.props.navigation.navigate('auth')} noBorder>
                            
                            <Icon
                            name="logout"
                            type="MaterialCommunityIcons"
                            style={{ color: "#FFF", fontSize: 25 }} 
                            />
                        
                        <Text
                        style={{ paddingLeft:10, color: "#FFF", fontSize: 20, fontWeight:'bold' }}
                        > تسجيل الخروج</Text>
                    </ListItem>
                </TouchableOpacity>    
            </List>
        </SafeAreaView>
      
    );
  }
}
