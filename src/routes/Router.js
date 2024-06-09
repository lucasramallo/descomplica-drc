import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Classification from '../screens/drc/Classification';
import Definition from '../screens/drc/Definition';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Classification" component={Classification} />
      <Stack.Screen name="Definition" component={Definition} />
    </Stack.Navigator>
  );
}