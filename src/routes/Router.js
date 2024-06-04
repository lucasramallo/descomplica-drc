import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Classification from '../screens/drc/Classification';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}