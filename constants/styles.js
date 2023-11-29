import { buttonGreen, greenText, tintcolor } from './constants';

// Adjust the styles based on your design
// import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = {

  container: {
    backgroundColor: 'white',
    // alignItems: 'start',
    flexDirection: 'column',
    padding: RFValue(10),
  },
  
  image: {
    alignSelf:'center',
    width:100,
    height: RFValue(70),
    marginTop: RFValue(16),
    resizeMode: 'contain',
    tintColor: tintcolor,
  },
  logo: {
    height: RFValue(160),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    height: RFValue(60),
    backgroundColor: buttonGreen,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: RFValue(30),
  },
  buttonText: {
    fontSize: RFValue(25),
    color: greenText,
  },
  pinText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    // fontFamily:"Poppins-Bold",
    color: greenText,
    marginLeft:RFValue(30)
  },
  input: {
    fontSize: RFValue(20),
    height: '100%',
    borderColor: greenText,
    padding:8,
    // fontFamily:"Poppins-ExtraBold",

    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  loginButtonText: {
    fontSize: RFValue(30),
    color: greenText,
    fontWeight: 'bold',
    // fontFamily:"Poppins-Bold",r
  },
};
const sty = StyleSheet.create({
  dimension: {
    height: RFValue(70),
    width: RFValue(270),
    padding: RFValue(10),
    marginVertical: RFValue(15),
    elevation: 5,
    borderRadius: RFValue(20),
  },

  buttonLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: buttonGreen,
  },
size:{fontSize:15},
  underText: {
    marginTop: RFValue(70),
    flex: 2,
    alignSelf: 'center',
    color: greenText,
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  Texxt: {
    textAlign:"center",
    fontWeight:"700",
    fontSize: 26,
    // lineHeight:'normal',r
    color:"#003128",
    marginBottom:RFValue(30)
  },
  text: (fontS) => ({
    color: greenText,
    fontWeight: 'bold',
    fontSize: RFValue(fontS),
  }),

  textSuccess: (fontS) => ({
    color: greenText,
    fontWeight: 'bold',
    fontSize: RFValue(fontS),
  }),
  container: {
      alignItems:'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: RFValue(30),
    padding: RFValue(10),
  },
});
export default sty;