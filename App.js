import Home from './src/screens/Home/Home'
import { NavigationContainer } from '@react-navigation/native';
import {  useFonts, Inter_700Bold, Inter_500Medium, Inter_600SemiBold, Inter_800ExtraBold, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter';
import { Epilogue_400Regular } from '@expo-google-fonts/epilogue';
import Router from './src/routes/Router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold,
    Inter_400Regular,
    Epilogue_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
