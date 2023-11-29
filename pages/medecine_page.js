import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { CheckBox } from "react-native-elements"
import { RFValue } from "react-native-responsive-fontsize"
import { green, greenText, mainGreen } from "../constants/constants"
import sty from "../constants/styles"


export const MedecineList=()=>{
    //!SECTION should add state states and to make the chekcbox work

    return(

        <ScrollView Style={{flex:1}}>
        <View style={[sty.container]} >
            <View style={{flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start',paddingBottom:RFValue(20)}}>
  <Text  style={[styles.Texxt,styles.weightBig,styles.sizeBig]} >Today’s medecine List </Text>
    <Text  style={{color:mainGreen,textTransform:"capitalize",fontSize:13,fontWeight:500}} >Given by your doctors  </Text>

            </View>
            <View style={{justifyContent:'flex-start',alignContent:'flex-start',paddingBottom:RFValue(20)}}>
        <Text  style={[styles.Texxt,styles.weightSmall,styles.sizeSmall,{paddingHorizontal:RFValue(10),marginHorizontal:RFValue(30)}]} >Morning</Text>
            <ContainerCheckBox fun={()=>{}} number_pills={2} checked={false} color={'red'} doctor={"doctor 1"} medecine={"medecine 1"}></ContainerCheckBox>
            <ContainerCheckBox fun={()=>{}} number_pills={3} checked={false} color={'blue'} doctor={"doctor 2"} medecine={"medecine 2"}></ContainerCheckBox>
</View>
<View style={{justifyContent:'flex-start',alignContent:'flex-start',paddingBottom:RFValue(20)}}>
        <Text  style={[styles.Texxt,styles.weightSmall,styles.sizeSmall,{paddingHorizontal:RFValue(10),marginHorizontal:RFValue(30)}]} >Midday</Text>
            <ContainerCheckBox fun={()=>{}} number_pills={2} checked={false} color={'red'} doctor={"doctor 1"} medecine={"medecine 1"}></ContainerCheckBox>
            <ContainerCheckBox fun={()=>{}} number_pills={3} checked={false} color={green} doctor={"doctor 2"} medecine={"medecine 2"}></ContainerCheckBox>
</View>
<View style={{justifyContent:'flex-start',alignContent:'flex-start',paddingBottom:RFValue(20)}}>
        <Text  style={[styles.Texxt,styles.weightSmall,styles.sizeSmall,{paddingHorizontal:RFValue(10),marginHorizontal:RFValue(30)}]} >Night</Text>
            <ContainerCheckBox fun={()=>{}} number_pills={2} checked={false} color={green} doctor={"doctor 1"} medecine={"medecine 1"}></ContainerCheckBox>
            <ContainerCheckBox fun={()=>{}} number_pills={3} checked={false} color={'blue'} doctor={"doctor 2"} medecine={"medecine 2"}></ContainerCheckBox>
            <ContainerCheckBox fun={()=>{}} number_pills={3} checked={false} color={'blue'} doctor={"doctor 2"} medecine={"medecine 2"}></ContainerCheckBox>
</View>     
           
            </View>

        </ScrollView>
    )
} 

export const styles = StyleSheet.create({
    buttonText:{    
    textAlign: 'center',
    fontWeight: '800',
    
    // paddingHorizontal:20,pa
    // width:200,
    fontSize: RFValue(15),},
    weightBig:{fontWeight:700},
    weightSmall:{fontWeight:400},
sizeSmall:{fontSize:18},
sizeBig:{fontSize:28},
sizeMed:{fontSize:21},
buttonOutlined:{height:RFValue(40),backgroundColor:'transparent',borderColor:greenText,borderWidth:2},
button:{width:RFValue(60),height:RFValue(40),  backgroundColor: greenText,
   },
   generalButton:{ padding: 10,
    borderRadius: 16,
    border:2,
    marginBottom:10,},
    Texxt: {
        // textAlign:'left',
        // fontWeight:"700",
        
        // lineHeight:'normal',r
        color:"#003128",
        textTransform:'capitalize'
        // marginBottom:RFValue(30)
      },
      containerInLine: {
        height:RFValue(83),
        width:RFValue(311),
        // alignItems: 'center',
         
       },
      Dim:{
        // flex: 1,
        // flexDirection: 'column',
        
        paddingHorizontal:13,
       
        paddingLeft:11,
    
        backgroundColor: 'white',
        // margin: 10,
        marginHorizontal:RFValue(20),marginVertical:4
      },
      generalContainer:{
  
        borderRadius:15,
      borderColor:"black",
      borderWidth:3,
      elevation: 4, // For Android
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,},
      
      
      customCheckedIcon: {
        width: 20,  // Adjust the size of the square
        height: 20,
        borderRadius: 5,  // Rounded edges
        borderWidth: 2,  // Set border width
        // borderColor: 'red',  // Set border color
      },
      TextBox:{
        color:mainGreen,
        textTransform:'capitalize',


fontSize: 17,
// font-style: normal;
fontWeight:"800"
// line-height: normal;
      },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },})

    const ContainerCheckBox=({fun,checked,color,medecine,doctor,number_pills})=>{
        return ( 
        < View style={[styles.generalContainer,styles.Dim,styles.containerInLine]}>
        <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",gap:10,alignSelf:'flex-start',marginVertical:RFValue(15)}}>
      
        <CheckBox
           
              checked={checked}
              onPress={fun}
              iconType="font-awesome"
              checkedIcon={
                  <FontAwesomeIcon icon={faCheckSquare} size={20} style={{color: color}} />
              }
              uncheckedIcon={
                  <View style={[styles.customCheckedIcon,{borderColor:color}]}></View>
              
              }
            />
      <View style={{flexDirection:'column'}}>
          <Text style={styles.TextBox}>{medecine}</Text>
          <Text style={[styles.Texxt,{fontSize:11}]}>Given by Doctor {doctor}</Text>
      </View>
          <Text style={[styles.Texxt,styles.sizeBig,styles.weightBig,{alignSelf:'center',marginHorizontal:RFValue(20)}]}>{number_pills} Pills</Text>
      
        </View>
        </View>
                  )
    }