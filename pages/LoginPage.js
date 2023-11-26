import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
// import { Icon } from 'react-native-vector-icons/FontAwesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { AccountCheck } from '../components/accountCheck';
import { buttonGreen, greenText, ieee, logoImage } from '../constants/constants';
import sty, { styles } from '../constants/styles';
// const image = require('../assets/ieee.png');
library.add(faEye, faEyeSlash);
export default function LoginPage({ navigation }) {
  const [obscureText, setObscureText] = useState(true);
  const [qrScanned, setQrScanned] = useState(false);
  const [pin, setPin] = useState('');

  const toggleObscureText = () => {
    setObscureText(!obscureText);

    // Wait for 200ms and then toggle the obscureText back
    setTimeout(() => {
      setObscureText(!obscureText);
    }, 200);
  };

  const handleScanPress = () => {
    if (!qrScanned) {
      // Implement navigation to QR scanning screen
      navigation.push('Scanner');
    }
    else {
    }
  };

  const handleLoginPress = () => {
    navigation.push("Main");
    // Implement login logic
  };const ToRegisterPress = () => {
    navigation.push("Register");
    // Implement login logic
  };

  useEffect(() => {
    // Handle side effects or subscriptions if needed
    return () => {
      // Clean up any subscriptions or side effects
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (

    <ScrollView contentContainerStyle={{ ...styles.container }}>
      <View style={styles.container}>
        <Image source={ieee} style={styles.image} />
      </View>

      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
      </View>

      <TouchableOpacity style={[sty.buttonLogin, sty.dimension]} onPress={handleScanPress} disabled={qrScanned}>
        <View style={{ marginLeft: RFValue(19), flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.loginButtonText}>{qrScanned ? 'Scanned' : 'Scan'}</Text>
        </View>
        <View style={{ backgroundColor: buttonGreen, alignItems: 'center' }}>
          {qrScanned ? <Text style={{ color: greenText }}>✓</Text> : <Image source={require('../assets/scan.png')} style={{ resizeMode: "center", maxHeight: 70, width: 50 }} />}
        </View>
      </TouchableOpacity>
<View>

      <Text style={styles.pinText}>Your PIN</Text>
      <View style={[sty.dimension, {
        alignSelf:'center',
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "white"
      }]}>
        <Image source={require('../assets/security.png')} style={{ resizeMode: 'contain', maxHeight: 20, width: 40, marginRight: 10 }} />
       
        <TextInput style={styles.input} onChangeText={(text) => setPin(text)} value={pin} keyboardType="numeric" secureTextEntry={obscureText}
          textAlign="left" // Set the text alignment to left
          
          //  selection={{ start: 0, end: 0 }}
          placeholder='XXXX-XXXX'
          placeholderTextColor={'grey'} />
        {/* add an image and icon hide */}
        {/* i want a button contain an icon  */}
        <TouchableOpacity style={{ backgroundColor: "white", padding: 10 }} onPress={toggleObscureText}>
        <FontAwesomeIcon
        icon={obscureText ? faEye : faEyeSlash}
        size={30}
        color="#000"
        />

        </TouchableOpacity>
      </View>
        </View>
      <TouchableOpacity style={[sty.buttonLogin, sty.dimension]} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

 
      <AccountCheck text={"Don't Have An Account?"} text2={"Sign Up"} fun={ToRegisterPress}></AccountCheck>
        <Text style={sty.underText}>Need Help?</Text>
    
      <View style={styles.container}></View>

    </ScrollView>
  );
}
