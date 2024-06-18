import { View, StyleSheet } from 'react-native';
import { backgroundColor } from '../../../assets/constants/colors';
import { paddingContainer } from '../../../assets/constants/constants';
import Content from '../../components/Content';
import Button from '../../components/Button';

export default function Definition(){
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Content
          title={"Doença Renal Crônica"}
          subtitle={"Diagnóstico"}
          content={"O diagnóstico precoce da DRC pode ser realizado por meio de exames simples, como: urina do tipo I e creatinina sérica, a presença de proteína na urina tipo I e diminuição da taxa de filtração glomerular (TFG)."} />
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