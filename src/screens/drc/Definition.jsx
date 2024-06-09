import { View, StyleSheet } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors';
import { paddingContainer } from '../../../assets/constants/constants';
import Content from '../../components/Content';
import Button from '../../components/Button';

export default function Definition(){
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Content
          title={"Doença Renal Crônica"}
          subtitle={"Definição"}
          content={"É caracterizada por anormalidades na estrutura e/ou função renal que permanecem por mais de três meses, com resultados negativos para a saúde do indivíduo. Por se tratar de uma doença que não tem sintomas, as manifestações dos sinais e sintomas ficam evidentes entre a fase de insuficiência renal moderada a severa, ou seja, quando os rins já apresentam perda funcional de forma significativa"} />
        </View>
        <Button />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    paddingHorizontal: paddingContainer,
    flex: 1,
    justifyContent: 'space-between'
  },
  content: {
    marginTop: '15%'
  },
});