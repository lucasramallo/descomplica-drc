import { ScrollView, Text, StyleSheet } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors'
import { paddingContainer } from '../../../assets/constants/constants'
import { ScrollableCards } from './components/ScrollableCards';
import rim from '../../../assets/img/rins.png';
import diabetes from '../../../assets/img/diabetes.png';
import hipertensao from '../../../assets/img/hipertensao.png';
import dna from '../../../assets/img/dna.png';
import idade from '../../../assets/img/idade.png';
import medicamentos from '../../../assets/img/medicamento.png';

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
    },
    {
      title: "Diagnóstico",
      description: "O diagnóstico precoce da DRC pode ser realizado por meio de exames...",
      img: rim
    }
  ];
  const cardsList2 = [
    {
      title: "Diabetes",
      description: "Pessoas com diabetes (quer seja do tipo 1 ou do tipo 2).",
      img: diabetes
    },
    {
      title: "Hipertensão",
      description: "Pessoas com hipertensão (pressão alta).",
      img: hipertensao
    },
    {
      title: "Hereditariedade",
      description: "Pessoas com história familiar de doença renal crônica.",
      img: dna
    },
    {
      title: "Idade",
      description: "Pessoas com idade superior a 60 anos.",
      img: idade
    },
    {
      title: "Medicamentos",
      description: "Uso abusivo  de medicamentos que agridem os rins.",
      img: medicamentos
    },
  ];
  const cardsList3 = [
    {
      title: "Descrição",
      description: "É caracterizada por anormalidades na estrutura e/ou função renal que...",
      img: rim
    }
  ];
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <Text style={styles.text}>Entenda</Text>
      <ScrollableCards cardsList={cardsList1} />
      <Text style={styles.text}>Fatores de risco</Text>
      <ScrollableCards cardsList={cardsList2} />
      <Text style={styles.text}>Prevenção</Text>
      <ScrollableCards cardsList={cardsList3} />
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
    fontFamily: 'Inter_500Medium',
    fontSize: 23,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 17,
    marginBottom: 12,
    color: '#555'
  }
});
