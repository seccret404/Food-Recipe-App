import React from 'react';
import { View,Text,StatusBar, ScrollView,Image, StyleSheet,TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categori from '../components/categori';
export default function HomeScreen(){
     return(
          <View style={{backgroundColor:'white',height:'100%'}}>
               <StatusBar barStyle={'dark-content'}/>

               <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}}>

           {/* bagianhedaer */}
               <View style={style.header}>
                    <Image source={require('../../assets/images/profil.png')} style={{height:hp(8),width:hp(8)}}/>
                   
                    <BellIcon size={hp(5)} color="grey"/>
               </View>
          
          {/* Nama */}
          <View style={{flexDirection:'column'}}>
               <Text style={{fontSize:hp(2)}}>
                    Hello, Edward Tua
               </Text>
               <View>
                    <Text style={style.get}>
                         Get Your Recipe Food Dreams!
                    </Text>
                    <Text style={style.find}>Find more <Text style={{color:'#ff983f'}}>Recipe Food</Text></Text>
               </View>
          </View>

          {/* search */}
          <View>
          <TextInput placeholder='Find more recipe'  style={style.input} />
          </View>
          <View style={{backgroundColor:'#ffffff'}}>
               <MagnifyingGlassIcon size={hp(3)} color='#454040' style={{zIndex:8,marginTop:-43,marginLeft:350,fontWeight:'bold'}}/>
          </View>
          
          {/* categori */}
          <View>
               <Categori/>
          </View>
          </ScrollView>
          </View>
     )
}

const style = StyleSheet.create({
     header:{
       flexDirection:'row',
       display:'flex',
       alignItems:"center",
       justifyContent:'space-between',
       marginLeft:2,
       marginRight:2,
       marginTop:20
     },
     get:{
          fontSize:24,
          fontWeight:'bold',
          letterSpacing:2

     },
     find:{
          fontSize:24,
          fontWeight:'bold',
          letterSpacing:2
     },
     input:{
          fontSize:18,
          backgroundColor:'grey',
         
          padding:2,
          margin:10,
          color:'#111111',
          paddingLeft:20,
          borderRadius:25,
          height:50,
          zIndex:-1

     }
})