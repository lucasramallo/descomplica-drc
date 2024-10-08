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
    cardTitle: "Definição",
    cardDescription: "",
    cardImg: kidney,
    onPress: () => navigation.navigate("Definition")
  },
  {
    cardTitle: "Classificação",
    cardDescription: "",
    cardImg: classification,
    onPress: () => navigation.navigate("Classification")
    
  },
  {
    cardTitle: "Diagnóstico",
    cardDescription: "",
    cardImg: diagnosis,
    onPress: () => navigation.navigate("Diagnosis")
  }
];

export const cardsList2 = [
  {
    cardTitle: "Diabetes",
    cardDescription: "Pessoas com diabetes (quer seja do tipo 1 ou do tipo 2).",
    cardImg: diabetes,
    disable: true
  },
  {
    cardTitle: "Hipertensão",
    cardDescription: "Pessoas com hipertensão (pressão alta).",
    cardImg: hypertension,
    disable: true
  },
  {
    cardTitle: "Hereditariedade",
    cardDescription: "Pessoas com história familiar de doença renal crônica.",
    cardImg: dna,
    disable: true
  },
  {
    cardTitle: "Idade",
    cardDescription: "Pessoas com idade superior a 60 anos.",
    cardImg: age,
    disable: true
  },
  {
    cardTitle: "Medicamentos",
    cardDescription: "Uso abusivo  de medicamentos que agridem os rins.",
    cardImg: medicines,
    disable: true
  },
];

export const cardsList3 = [
  {
    cardDescription: "Pratique atividade física.",
    cardImg: exercise,
    disable: true,
    reversed: true
  },
  {
    cardDescription: "Evite o consumo abusivo de gorduras.",
    cardImg: forbiddenFat,
    disable: true,
    reversed: true
  },
  {
    cardDescription: "Controle o peso.",
    cardImg: scales,
    disable: true,
    reversed: true
  },
  {
    cardDescription: "Evite o uso de cigarro e bebidas alcoólicas.",
    cardImg: forbiddenAlcoholCigarettes,
    disable: true,
    reversed: true
  },
  {
    cardDescription: "Controle a diabetes (açúcar no sangue).",
    cardImg: diabetes,
    disable: true,
    reversed: true
  },
  {
    cardDescription: "Controle a hipertensão (pressão alta)",
    cardImg: hypertension,
    disable: true,
    reversed: true
  }
];