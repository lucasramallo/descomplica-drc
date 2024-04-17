import { View, Text, StyleSheet } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors'
import { paddingContainer } from '../../../assets/constants/constants'
import { ScrollableCards } from './components/ScrollableCards';
import rim from '../../../assets/img/rins.png';

export default function DRC() {
  const cardsList1 = [
    {
      title: "Descrição",
      description: "É caracterizada por anormalidades na estrutura e/ou função renal que...",
      img: rim
    },
    {
      title: "Classificação",
      description: "Os rins tem um bom funcionamento, porém já apresenta lesão moderada com...",
      img: rim
    }
  ];
  const cardsList2 = [
    {
      title: "Genética",
      description: "É caracterizada por anormalidades na estrutura e/ou função renal que...",
      img: rim
    },
    {
      title: "Classificação",
      description: "Os rins tem um bom funcionamento, porém já apresenta lesão moderada com...",
      img: rim
    }
  ];
  const cardsList3 = [
    {
      title: "Descrição",
      description: "É caracterizada por anormalidades na estrutura e/ou função renal que...",
      img: rim
    }
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entenda</Text>
      <ScrollableCards cardsList={cardsList1} />
      <Text style={styles.text}>Fatores de risco</Text>
      <ScrollableCards cardsList={cardsList2} />
      <Text style={styles.text}>Prevenção</Text>
      <ScrollableCards cardsList={cardsList3} />
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
