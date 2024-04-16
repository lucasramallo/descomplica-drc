import DRC from './DRC';
import Hypertension from './Hypertension';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { mainColor } from '../../../assets/constants/colors'

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <>
      <Text style={{ marginLeft: 25, marginTop: '15%', fontFamily: 'Inter_600SemiBold', fontSize: 26, color: '#0F0F1E'}}>Bem-Vindo!</Text>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16, fontFamily: 'Inter_700Bold', paddingVertical: 5},
          tabBarIndicatorStyle: { backgroundColor: '#fff', height: '80%', width: '45%', margin: 6, borderRadius: 50, marginLeft: 8 },
          tabBarActiveTintColor: mainColor,
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: { backgroundColor: mainColor, marginTop: 30, marginHorizontal: 30, marginBottom: 30, borderRadius: 50, padding: 2},
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen name="DRC" component={DRC} />
        <Tab.Screen name="Hipertensão" component={Hypertension} />
      </Tab.Navigator>
    </>
  );
}