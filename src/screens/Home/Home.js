import DRC from './DRC';
import Hypertension from './Hypertension';
import { SafeAreaView, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors'

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15, fontFamily: 'Inter_700Bold', paddingVertical: 5},
          tabBarIndicatorStyle: { backgroundColor: backgroundColor, height: '80%', width: '45%', margin: 6, borderRadius: 50, marginLeft: 8 },
          tabBarActiveTintColor: secondColor,
          tabBarInactiveTintColor: secondColor,
          tabBarStyle: { backgroundColor: '#fff', marginTop: 50, marginHorizontal: 30, marginBottom: 30, borderRadius: 50, padding: 2, shadowColor: '#fff'},
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen name="DRC" component={DRC} />
        <Tab.Screen name="Hipertensão" component={Hypertension} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}