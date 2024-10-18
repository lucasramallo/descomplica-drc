import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native'; // Para o carregamento
import Home from '../screens/Home/Home';
import Classification from '../screens/drc/Classification';
import Definition from '../screens/drc/Definition';
import Diagnosis from '../screens/drc/Diagnosis';
import Questionnaire from '../screens/questionnaire/Questionnaire';
import Result from '../screens/questionnaire/Result';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function Router() {
  const [initialRoute, setInitialRoute] = useState(null);

  const checkUserHasCompletedQuestionnaire = async () => {
    try {
      const value = await AsyncStorage.getItem('userHasCompletedQuestionnaire');
      console.log("value: " + value);
      return value === "true";
    } catch (error) {
      console.error('Erro ao recuperar a configuração:', error);
      return false;
    }
  };

  useEffect(() => {
    const getInitialRoute = async () => {
      const userHasCompletedQuestionnaire = await checkUserHasCompletedQuestionnaire();
      if (userHasCompletedQuestionnaire) {
        setInitialRoute('Home');
      } else {
        setInitialRoute('Questionnaire');
      }
    };

    getInitialRoute();
  }, []);

  if (initialRoute === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Questionnaire" component={Questionnaire} />
      <Stack.Screen name="QustionnaireResult" component={Result} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Classification" component={Classification} />
      <Stack.Screen name="Definition" component={Definition} />
      <Stack.Screen name="Diagnosis" component={Diagnosis} />
    </Stack.Navigator>
  );
}
