import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors';
import { paddingContainer } from '../../../assets/constants/constants';
import { ScrollableCards } from './components/ScrollableCards';
import MessageCard from './components/MenssageCard';
import { cardsList1, cardsList2, cardsList3 } from '../Home/data/DRCCardsData'
import { useNavigation } from '@react-navigation/native';
import QuestionnaireButton from '../../components/QuestionnaireButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DRC() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Entenda sobre Doença Renal Crônica</Text>
      <ScrollableCards cardsListData={cardsList1(navigation)} />
      <Text style={[styles.text,{fontWeight: 'bold'}]}>Fatores de risco</Text>
      <ScrollableCards cardsListData={cardsList2} />
      <Text style={[styles.text,{fontWeight: 'bold'}]}>Prevenção</Text>
      <ScrollableCards cardsListData={cardsList3} />

      <MessageCard message="A saúde é a riqueza mais valiosa, cuide dela como o seu maior tesouro." />

      <View style={{paddingRight: paddingContainer}}>
        <QuestionnaireButton onPress={() => navigation.navigate("Questionnaire")}/>
      </View>
 
      {/* { remover depois - botão tmporário para testes} */}
      <TouchableOpacity onPress={() => AsyncStorage.setItem('userHasCompletedQuestionnaire', JSON.stringify(false))}>
          <Text>Reset userHasCompletedQuestionnaire to false</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    paddingLeft: paddingContainer,
    paddingBottom: paddingContainer
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 15,
    marginBottom: 25,
    paddingRight: paddingContainer,
    color: '#4D4D56'
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    marginBottom: 12,
    marginTop: 20,
    color: '#767175',
    marginLeft: 5
  },
});
