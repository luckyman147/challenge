import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { green, mainGreen, sleep, strezs } from '../constants/constants';
// import Progress
import { tintcolor } from '../constants/constants';

import { faFireFlameCurved, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { CustomLineItem } from '../components/CustomLineItem';
const MyGridComponent = () => {
  return (
    <ScrollView style={{flex:1}}>

        <View style={[styles.container]} >
          <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15}}>
          <View style={{flexDirection:'row'}}>

<Text style={[styles.Text,{fontWeight:400}]}> Good Morning, </Text>
<Text style={[styles.Text,{fontWeight:700}]}> X, </Text>
</View>
<View style={styles.circle}></View>

          </View>

      <View style={[styles.immageLIne,styles.general]}>
          

        <View style={styles.containerInRow}>
{/* Icon */}
      
<Image source={require('../assets/Mask_group.png')} style={{resizeMode:'contain',height:35,width:50,marginVertical:12,marginLeft:10,marginRight:11}}></Image>
        <View style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-start',alignContent:'flex-start',marginRight:10}}>
        <Text style={[styles.textWhite,{fontWeight:800,
  fontSize:RFValue(22),
        
        }]}>Health  Practices</Text>
        <Text style={[styles.textWhite,{fontWeight:300,width:190,
        textAlign:'left',
  fontSize:RFValue(12),
        
        }]}>Descover Latest Practices to stay healthy </Text>
        </View>
        </View>
          
      
      </View>
      <View style={styles.mainText}>

<Text style={{color:mainGreen,fontSize:RFValue(26),fontWeight:900,textAlign:'center',}}>Don’t Forget To Check</Text>
      </View>


      {/* Line 2 */}
      <View style={[styles.line,styles.line2]} >
        <View>

      
<HearBeat></HearBeat>
    <Calories></Calories>



        </View>
<View style={{flexDirection:'column'}}>
   <SPO2></SPO2>
 <Pressure></Pressure>
  </View>
   </View>

      {/* Line 3 */}
      <View style={[styles.line,styles.line2]}>
      <CustomLineItem styles={[styles.containerSmall,styles.general,styles.containerDim]} image={sleep}
        text={"Sleep Tracking"} onPress={()=>{}}/>
      <CustomLineItem styles={[styles.containerSmall,styles.general,styles.containerDim]} image={strezs} text={"SPO2 Measure"} onPress={()=>{}}/>

        {/* Add your text and image components here */}
      </View>

     
    </View>
</ScrollView>
  );
};

const HearBeat=()=>{
  return (<TouchableOpacity style={[styles.containerInLine,styles.general ,styles.containerDim]} onPress={()=>{}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
<Text style={{color:mainGreen,fontSize:RFValue(19),fontWeight:600,textAlign:'center'}}>Heart Rate </Text>
<FontAwesomeIcon icon={faHeart}  color={mainGreen}></FontAwesomeIcon>
  </View>
{/* <HeartbeatAnimation></HeartbeatAnimation> */}
<Image source={require('../assets/heart_system.png')} style={{height:91,width:144,marginVertical:10,marginLeft:22,marginRight:11}} 
></Image>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
{/* //NOTE - The heart beat Number */}
<Text style={{color:green,fontSize:RFValue(30),fontWeight:700,textAlign:'center'}}>80 </Text>
<Text style={{color:'black',fontSize:RFValue(13),fontWeight:400,textAlign:'center'}}>bpm </Text>

  </View>
</TouchableOpacity> )
}




 const CustomLineItem = ({ styles,image, text, onPress }) => {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignContent:'center',marginVertical:25,marginLeft:15}}>

        <Image source={image}  ></Image>

      <Text style={{fontWeight:700,fontSize:RFValue(20),color:mainGreen,width:100,marginLeft:10}}>{text}</Text>
      

</View>
    </TouchableOpacity>
  );
};
const Pressure=()=>{
  return(
    <TouchableOpacity style={[styles.containerInLine,styles.general ,styles.containerDim]} onPress={()=>{}}>
    <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{color:mainGreen,fontSize:RFValue(22),fontWeight:700,textAlign:'center',marginVertical:10}}>Pressure </Text>

    </View>
    <View style={{flexDirection:'row',  alignItems:'center'}}>
{/* <HeartbeatAnimation></HeartbeatAnimation> */}
<Image source={require('../assets/pressure.png')} style={{marginLeft:22,marginRight:11}} 
></Image>
<View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center',marginVertical:10,marginHorizontal:10}}>
{/* //NOTE - The heart beat Number */}
<Text style={{color:green,fontSize:RFValue(34),fontWeight:700,textAlign:'center'}}>80 </Text>
<Text style={{color:green,fontSize:RFValue(34),fontWeight:700,textAlign:'center',marginTop:10}}>8 </Text>

    </View>
    </View>
</TouchableOpacity> 
  )
}
const SPO2=()=>{
  return( <TouchableOpacity style={[styles.containerSmall,styles.general,styles.containerDim]} onPress={()=>{}}>
  <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginVertical:26,}}>
  <Image source={require('../assets/oooo.png')} style={{resizeMode:'contain',height:45,width:50}}></Image>
  <View style={{flexDirection:'column',justifyContent:'center',alignItems:'flex-start',alignContent:'center',marginLeft:10}}>
  <Text style={[{fontWeight:800,color:mainGreen,
fontSize:RFValue(22),
  
  }]}>SPO2</Text>
  <Text style={[{fontWeight:700,width:190,color:green,
  textAlign:'left',
  marginLeft:15,
fontSize:RFValue(23),
  
  }]}>50 </Text>
  </View>

  </View>

</TouchableOpacity>)
}

const Calories=()=>{

  return(<TouchableOpacity style={[styles.containerSmall,styles.general,styles.containerDim]} onPress={()=>{}}>
  <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginVertical:26,}}>
  <FontAwesomeIcon icon={faFireFlameCurved} color={mainGreen} size={40} />
  <View style={{flexDirection:'column',justifyContent:'center',alignItems:'flex-start',alignContent:'center',marginLeft:10,marginTop:12}}>
  <Text style={[{fontWeight:800,color:mainGreen,
fontSize:RFValue(19),
  
  }]}>Calories</Text>
 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
{/* //NOTE - The calories Number */}
<Text style={{color:green,fontSize:RFValue(25),fontWeight:700,textAlign:'center'}}>2.2K </Text>
<Text style={{color:'black',fontSize:RFValue(13),fontWeight:400,textAlign:'center'}}>cal </Text>

  </View>
  </View>
  </View>

</TouchableOpacity>)
}
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
  circle: {
    width: 35, // Adjust the size of the circle as needed
    height: 35 ,
    borderRadius: 100, // Half of the width and height to make it a circle
    backgroundColor: tintcolor,

  }, 
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: RFValue(19),
    padding: RFValue(10),
  },
  line2: {
    justifyContent: 'space-evenly', // Adjust based on your layout preferences
  },
immageLIne:{
  alignContent:"center",
  flex:1,
  
  marginHorizontal: RFValue(10),
  marginBottom:  RFValue(10),

  backgroundColor:green
},
general:{
  
  borderRadius:15,
borderColor:"black",
borderWidth:3,
elevation: 4, // For Android
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.25,
shadowRadius: 4,},
  line: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal:10
    // justifyContent: 'space-between',
    // marginBottom: 10,
  },
  containerInLine: {
   height:RFValue(191),
   width:RFValue(150),
   alignItems: 'center',
    
  },
  containerSmall: {
    height:RFValue(103),
    width:RFValue(150),
  //  alignItems: 'center',

  },
  containerDim:{
    // flex: 1,
    // flexDirection: 'column',
    
    paddingHorizontal:13,
   
    paddingLeft:11,

    backgroundColor: 'white',
    // margin: 10,
    marginHorizontal:20,marginVertical:5
  },
  containerInRow: {
    flex:1,
    borderRadius:15,

    // mazke themù center*

    flexDirection: 'row',
    alignItems: 'space-evenly',
    justifyContent:'space-between',
    // marginVertical:10,
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
  mainText:{display: 'flex',
width: 334,
padding: 10,
justifyContent: "center",
alignItems: "center",
gap: 10,},
Text:{
  color:'black',
  fontSize:RFValue(23),
  textAlign:'center',
},
textWhite:{
  color:'white',
  textAlign:'center',

},
});
export default MyGridComponent;
