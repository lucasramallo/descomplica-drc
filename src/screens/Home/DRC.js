import { ScrollView, Text, StyleSheet } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors'
import { paddingContainer } from '../../../assets/constants/constants'
import { ScrollableCards } from './components/ScrollableCards';
import MessageCard from './components/MenssageCard';
import { cardsList1, cardsList2, cardsList3 } from '../Home/data/DRCCardsData'

export default function DRC() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Entenda sobre doença renal crônica</Text>
      <Text style={styles.text}>Entenda</Text>
      <ScrollableCards cardsList={cardsList1} />
      <Text style={styles.text}>Fatores de risco</Text>
      <ScrollableCards cardsList={cardsList2} />
      <Text style={styles.text}>Prevenção</Text>
      <ScrollableCards cardsList={cardsList3} />

      <MessageCard message="A saúde é a riqueza mais valiosa, cuide dela como o seu maior tesouro." />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    paddingLeft: paddingContainer,
    paddingBottom: paddingContainer
  },
  welcomeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 23,
    marginTop: 15,
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
