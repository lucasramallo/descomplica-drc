import Home from './src/screens/Home/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import {  useFonts, Inter_700Bold, Inter_500Medium, Inter_600SemiBold, Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Epilogue_400Regular } from '@expo-google-fonts/epilogue';

export default function App() {
  let [fontsLoaded] = useFonts({
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
      <Home />
    </NavigationContainer>
  );
}
