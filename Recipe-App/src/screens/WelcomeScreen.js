import React,{useEffect} from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen(){

     //set unutk mengarahkan halaman ke halaman home
     const navigation = useNavigation();
     useEffect(()=>{
          setTimeout(()=> navigation.navigate('Home'),2500)
     })
//endset
     return(
          
          <View style={style.bg}>
               <StatusBar style='light'/>
               <View style={style.bg1}>
                    <View style={style.bg2}>
               <Image source={require('../../assets/images/logo.png')} style={{width:hp(28),height:hp(28)}}/>
                    </View>
               </View>
               <Text style={style.logo}>Welcome</Text>
               <Text style={style.get}>Get Yout Favorite Food!</Text>
          </View>
     )
}



const style = StyleSheet.create({
     bg:{
          backgroundColor:"#ff7f00",
          height:'100%',
          justifyContent:'center',
          alignItems:'center',
     },
     logo:{
          fontSize:28,
          fontWeight:'bold',
          color:'#FFFFFF',
          letterSpacing:3

     },
     get:{
          fontSize:24,
          fontWeight:'500'


     },
     bg1:{
          backgroundColor:'#f5f5f5',
          borderRadius:150,
          padding:hp(5),
          
     },
     bg2:{
          backgroundColor:'#cccccc',
          borderRadius:150,
          padding:hp(3)

     }

})