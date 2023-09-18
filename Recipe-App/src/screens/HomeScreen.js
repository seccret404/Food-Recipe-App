import React from 'react';
import { View,Text,StatusBar, ScrollView,Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon} from 'react-native-heroicons/outline';
export default function HomeScreen(){
     return(
          <View>
               <StatusBar barStyle={'dark-content'}/>

               <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}}/>

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
                    <Text>
                         Get Your Recipe Food Dreams!
                    </Text>
               </View>
          </View>
          
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
       marginRight:2
     }
})