import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Content from '../../components/Content'
import { mainColor, backgroundColor } from '../../../assets/constants/colors';
import { paddingContainer } from '../../../assets/constants/constants'
import Question from './components/Question';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AgeInput from './components/AgeInput';

export default  function Questionnaire({ navigation }) {
  const [counter, setCounter] = useState(0);

  const ageIncrementCounter = (value) => {
    setCounter(prvCounter => prvCounter += value);
  }

  const ageDecrementCounter = (value) => {
    setCounter(prvCounter => prvCounter -= value);
  }

  const incrementCounter = () => {
    setCounter(prvCounter => prvCounter += 1);
  }

  const decrementCounter = () => {
    setCounter(prvCounter => prvCounter -= 1);
  }

  console.log(counter)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Content 
          title={"QUESTIONÁRIO"} 
          subtitle={"Triagem para Doença Renal Oculta"} 
          content={"Verifique cada afirmativa que é verdadeira para você. Se uma afirmativa não é verdadeira ou você não tem certeza, responda não."}
        />

        <AgeInput incrementCounter={ageIncrementCounter} decrementCounter={ageDecrementCounter}/>

        <Question 
          title={"Qual seu sexo biológico?"} 
          value1={"Feminino"} 
          value2={"Masculino"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <Question 
          title={"Algum profissional de saúde já disse que você tem ou teve anemia?"} 
          value1={"Sim"} 
          value2={"Não"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <Question 
          title={"Algum profissional de saúde já disse que você tem pressão alta?"} 
          value1={"Sim"} 
          value2={"Não"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <Question 
          title={"Algum profissional de saúde já disse que você tem diabetes (açúcar alto no sangue)?"} 
          value1={"Sim"} 
          value2={"Não"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <Question 
          title={"Você já teve um ataque cardíaco (infarto) ou derrame/AVC/AVE?"} 
          value1={"Sim"} 
          value2={"Não"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <Question 
          title={"Você já teve insuficiência cardíaca congestiva ou insuficiência cardíaca?"} 
          value1={"Sim"} 
          value2={"Não"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <Question 
          title={"Você tem problema de circulação/doença circulatória em suas pernas?"} 
          value1={"Sim"} 
          value2={"Não"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <Question 
          title={"Algum exame médico mostrou que você tem perda de proteína na urina?"} 
          value1={"Sim"} 
          value2={"Não"} 
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />

        <View style={styles.BottomButtons}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Home")}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>{"Pular  ❯"}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate("QustionnaireResult", {score: counter})}
            style={styles.continueButton}
          >
            <Text style={styles.buttonText}>{"Continuar  ❯"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    paddingHorizontal: paddingContainer,
  },
  content: {
    flex: 1,
    marginTop: '18%',
    marginBottom: '10%'
  },
  BottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  continueButton: {
    width: 150,
    height: 50,
    backgroundColor: mainColor,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    width: 100,
    height: 50,
    backgroundColor: backgroundColor,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: "Inter_500Medium",
    color: '#fff',
    fontSize: 15
  },
  backButtonText: {
    fontFamily: "Inter_500Medium",
    color: '#121212',
  }
})