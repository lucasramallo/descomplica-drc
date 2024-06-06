import kidney from '../../../../assets/img/kidney.png';
import classification from '../../../../assets/img/classification.png';
import diagnosis from '../../../../assets/img/diagnosis.png';
import diabetes from '../../../../assets/img/diabetes.png';
import hypertension from '../../../../assets/img/hypertension.png';
import dna from '../../../../assets/img/faixa-de-dna.png';
import age from '../../../../assets/img/grupo-de-idade.png';
import medicines from '../../../../assets/img/medicines.png';
import exercise from '../../../../assets/img/exercicio.png';
import forbiddenFat from '../../../../assets/img/forbidden-fat.png';
import scales from '../../../../assets/img/scales.png';
import forbiddenAlcoholCigarettes from '../../../../assets/img/forbidden-alcohol-cigarettes.png';

export const cardsList1 = ( navigation ) => [
  {
    title: "Definição",
    description: "",
    img: kidney,
  },
  {
    title: "Classificação",
    description: "",
    img: classification,
    onPress: () => { 
      navigation.navigate("Classification")
    }
  },
  {
    title: "Diagnóstico",
    description: "",
    img: diagnosis
  }
];

export const cardsList2 = [
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

export const cardsList3 = [
  {
    title: "",
    description: "Pratique atividade física.",
    img: exercise
  },
  {
    title: "",
    description: "Evite o consumo abusivo de gorduras.",
    img: forbiddenFat
  },
  {
    title: "",
    description: "Controle o peso.",
    img: scales
  },
  {
    title: "",
    description: "Evite o uso de cigarro e bebidas alcoólicas.",
    img: forbiddenAlcoholCigarettes
  },
  {
    title: "",
    description: "Controle a diabetes (açúcar no sangue).",
    img: diabetes
  },
  {
    title: "",
    description: "Controle a hipertensão (pressão alta)",
    img: hypertension
  }
];