import { ScrollView, Text, StyleSheet } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors'
import { paddingContainer } from '../../../assets/constants/constants'
import { ScrollableCards } from './components/ScrollableCards';
import kidney from '../../../assets/img/kidney.png';
import classification from '../../../assets/img/classification.png';
import diagnosis from '../../../assets/img/diagnosis.png';
import diabetes from '../../../assets/img/diabetes.png';
import hypertension from '../../../assets/img/hypertension.png';
import dna from '../../../assets/img/dna.png';
import age from '../../../assets/img/age.png';
import medicines from '../../../assets/img/medicines.png';
import exercise from '../../../assets/img/exercise.png';
import forbiddenFat from '../../../assets/img/forbidden-fat.png';
import scales from '../../../assets/img/scales.png';
import forbiddenAlcoholCigarettes from '../../../assets/img/forbidden-alcohol-cigarettes.png';

export default function DRC() {
  const cardsList1 = [
    {
      title: "Descrição",
      description: "É caracterizada por anormalidades na estrutura e/ou função renal que...",
      img: kidney
    },
    {
      title: "Classificação",
      description: "Os rins tem um bom funcionamento, porém já apresenta lesão moderada com...",
      img: classification
    },
    {
      title: "Diagnóstico",
      description: "O diagnóstico precoce da DRC pode ser realizado por meio de exames...",
      img: diagnosis
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
      img: hypertension
    },
    {
      title: "Hereditariedade",
      description: "Pessoas com história familiar de doença renal crônica.",
      img: dna
    },
    {
      title: "Idade",
      description: "Pessoas com idade superior a 60 anos.",
      img: age
    },
    {
      title: "Medicamentos",
      description: "Uso abusivo  de medicamentos que agridem os rins.",
      img: medicines
    },
  ];
  const cardsList3 = [
    {
      title: "Número 1",
      description: "Praticar atividade física.",
      img: exercise
    },
    {
      title: "Número 2",
      description: "Evitar o consumo abusivo de gorduras.",
      img: forbiddenFat
    },
    {
      title: "Número 3",
      description: "Controlar o peso.",
      img: scales
    },
    {
      title: "Número 4",
      description: "Evitar o uso de cigarro e bebidas alcoólicas.",
      img: forbiddenAlcoholCigarettes
    },
    {
      title: "Número 5",
      description: "Controlar a diabetes (açúcar no sangue).",
      img: diabetes
    },
    {
      title: "Número 6",
      description: "Controlar a hipertensão (pressão alta)",
      img: hypertension
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
