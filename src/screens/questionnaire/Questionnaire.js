import { Text, StyleSheet, View } from 'react-native'
import Content from '../../components/Content'
import { backgroundColor } from '../../../assets/constants/colors';
import { paddingContainer } from '../../../assets/constants/constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import Question from './components/Question';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AgeInput from './components/AgeInput';

export default  function Questionnaire() {
  const [counter, setCounter] = useState(0);

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

        <AgeInput />

        <Question 
          title={"Qual seu sexo biológico?"} 
          value1={"Masculino"} 
          value2={"Feminino"} 
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
          value1={"Masculino"} 
          value2={"Feminino"} 
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
          title={"Algum profissional de saúde já disse que você tem pressão alta?"} 
          value1={"Masculino"} 
          value2={"Feminino"} 
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
          value1={"Masculino"} 
          value2={"Feminino"} 
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
          value1={"Masculino"} 
          value2={"Feminino"} 
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
  }
})