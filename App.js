import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/register_page';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image } from 'react-native';
import { greenText } from './constants/constants';
import { SettingsPage } from './pages/Settings_page';
import MyGridComponent from './pages/main_page';
import { MedecineList } from './pages/medecine_page';
import { SearchPage } from './pages/searchPage';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//use state
//!Use State on color

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen name="Main"options={{ headerShown: false }} >
          {() => (
            <Tab.Navigator screenOptions={{
              tabBarStyle: { position: 'absolute' ,borderRadius:22

            
            },
         
            headerShown:false,
            tabBarActiveTintColor:greenText
            }}>
              <Tab.Screen name="Home"
              options={{tabBarIcon:HomeTabIcon}}
              component={MyGridComponent} />

              <Tab.Screen name="Medecine" 
              options={{tabBarIcon:mEDSTabIcon}}
              
              component={MedecineList} />
              <Tab.Screen name="Search" 
              options={{tabBarIcon:appTabIcon}}
              
              component={SearchPage} />
              <Tab.Screen name="Profil" 
              options={{tabBarIcon:ProfilTabIcon}}
              component={SettingsPage} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeTabIcon = () => (
  <Image source={require("./assets/house.png") } style={{width:23,height:23}}></Image>

);const appTabIcon = () => (
  <FontAwesomeIcon icon={faSearch} size={20} color="grey"  />


);const ProfilTabIcon = () => (
<Image source={require("./assets/compte.png") } style={{width:23,height:23}}></Image>

);
const mEDSTabIcon = () => (
<Image source={require("./assets/med.png") } style={{width:23,height:23}}></Image>
  );