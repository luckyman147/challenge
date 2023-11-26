import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { styles } from '../pages/main_page';
import { RFValue } from 'react-native-responsive-fontsize';
import { newgreen } from '../constants/constants';

export const CustomLineItem = ({ image, text, onPress }) => {
  return (
    <TouchableOpacity style={ImageStyle.containerInLine} onPress={onPress}>
      <Text style={ImageStyle.text}>{text}</Text>
      

        <Image source={image} style={ImageStyle.heart} ></Image>

        
      
    </TouchableOpacity>
  );
};
const ImageStyle=StyleSheet.create({
  heart:{
    position:'relative',
    // alignSelf:'center',:
    alignItems:'center',
    marginVertical:20,
    
    resizeMode:'contain',
  // tintColor:'black',
    flexShrink: 0,
    height: 80,
    width: 80,

  },
  text: {
    
flexShrink: 0,
    color: 'black',
    fontSize: RFValue(16),
    // fontWeight: 600,
// lineHeight: 'normal'
    
  },
  containerInLine: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // paddingHorizontal:11,
    paddingTop:11,
    // paddingLeft:11,
    borderRadius:12,
    backgroundColor: newgreen,
    margin: 10,
  },
})