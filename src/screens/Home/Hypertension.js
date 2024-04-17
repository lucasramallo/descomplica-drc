import { View, Text, StyleSheet } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors'
import { paddingContainer } from '../../../assets/constants/constants'
import { ScrollableCards } from './components/ScrollableCards';
import rim from '../../../assets/img/rins.png';

export default function Hypertension() {
  const cardsList = [
    {
      title: "Descrição",
      description: "É caracterizada por anormalidades na estrutura e/ou função renal que...",
      img: rim
    },
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entenda</Text>
      <ScrollableCards cardsList={cardsList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingLeft: paddingContainer,
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 17,
    marginBottom: 12
  }
});
