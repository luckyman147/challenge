import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heart, idea, kcal, newgreen, o2, pressure, sleep, spadrie, strezs } from '../constants/constants';
// import Progress

import { CustomLineItem } from '../components/CustomLineItem';
import MyCircularProgressBarWithImage from '../components/animated_progress';
const MyGridComponent = () => {
  return (
    <ScrollView style={{flex:1}}>

        <View style={[styles.container]} >
      {/* Line 1 */}
    

   {/* <Image source={ieee}
   style={[styles.imageLogo,{}]} // Adjust the style based on your preferences
   //  resizeMode="cover"
   >
     </Image> */}
      <View style={[styles.immageLIne]}>
          

        <View style={styles.containerInRow}>

        <MyCircularProgressBarWithImage imageSource={spadrie} ></MyCircularProgressBarWithImage>
        <MyCircularProgressBarWithImage imageSource={kcal} ></MyCircularProgressBarWithImage>
        </View>
          
      
      </View>

      {/* Line 2 */}
      <View style={[styles.line,styles.line2]} onPress={()=>{}}>
   
      <CustomLineItem image={heart}
      
      text={"Heart Beat"} onPress={()=>{}}/>
      <CustomLineItem 
      image={sleep}
      text={"Sleep Tracking"} onPress={()=>{}}/>
     
      </View>

      {/* Line 3 */}
      <View style={[styles.line,styles.line2]}>
      <CustomLineItem  image={strezs}
        text={"Stress Measure"} onPress={()=>{}}/>
      <CustomLineItem  image={o2} text={"SPO2 Measure"} onPress={()=>{}}/>

        {/* Add your text and image components here */}
      </View>

      {/* Line 4 */}
      <View style={styles.line}>
        <CustomLineItem image={pressure} onPress={()=>{}}  text={"Blood Measure"}/>
        <CustomLineItem image={idea} text={"Daily Tips"}
        />

        {/* Add your text and image components here */}
      </View>
    </View>
</ScrollView>
  );
};

export const styles = StyleSheet.create({
  
  scrollContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    padding: RFValue(10)
  },
  backgroundImageContainer: {
    flex: 1,
    // resizeMode:"contain",
    // justifyContent: 'center', // You might need to adjust this based on your layout requirements
    alignItems: 'center',
    aspectRatio:4,
    // width:200
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: RFValue(19),
    padding: RFValue(20),
  },
  line2: {
    justifyContent: 'space-evenly', // Adjust based on your layout preferences
  },
immageLIne:{
  alignContent:"center",
  flex:1,
  borderRadius:12,

  marginHorizontal: RFValue(10),
  marginBottom:  RFValue(10),

  backgroundColor:newgreen
},

  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerInLine: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: newgreen,
    margin: 10,
  }, containerInRow: {
    flex:1,
    borderRadius:12,

    // mazke themù center*

    flexDirection: 'row',
    alignItems: 'space-evenly',
    justifyContent:'space-between',
    marginVertical:10,
    padding:10,
    // backgroundColor: newgreen,
    
  },
  image: {
    flex:2,
    height: RFValue(50),
    resizeMode: 'contain',
    marginRight: 10,
  },
  imageLogo: {
    position: 'absolute',
    top: 23,
    left: 42,
    opacity:0.2,
    // alignSelf:'"'
    
    resizeMode: 'contain',
    width: '70%',
    height: '70%',
  },

});
export default MyGridComponent;
