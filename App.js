import Home from './src/screens/Home/Home'
import { NavigationContainer } from '@react-navigation/native';
import {  useFonts, Inter_700Bold, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold
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
