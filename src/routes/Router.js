import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Classification from '../screens/drc/Classification';
import Definition from '../screens/drc/Definition';
import Diagnosis from '../screens/drc/Diagnosis';
import Questionnaire from '../screens/questionnaire/Questionnaire';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Qustionnaire" component={Questionnaire} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Classification" component={Classification} />
      <Stack.Screen name="Definition" component={Definition} />
      <Stack.Screen name="Diagnosis" component={Diagnosis} />
    </Stack.Navigator>
  );
}