import React from 'react'
import { View,Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import { categoryData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Categori(){
     return(
          <View>
               <ScrollView
               horizontal={true}>
               {
                   categoryData.map((cat, index)=>{
                    return(
                         <TouchableOpacity key={index}>
                              <View>
                                   <Image source={{uri: cat.image}} style={{height:hp(5),width:hp(5)}}/>
                              </View>
                         </TouchableOpacity>
                    )
                   }) 
               }
               </ScrollView>
          </View>
     )
}