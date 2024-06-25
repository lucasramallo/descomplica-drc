import { ScrollView, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors';
import { paddingContainer } from '../../../assets/constants/constants'
import Content from '../../components/Content';
import ClassificationCard from '../../components/ClassificationCards';
import Button from '../../components/Button';

export default function Classification() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Content 
          title={"Doença Renal Crônica"} 
          subtitle={"Classificação"}
        />

        <ClassificationCard />

        <Button />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    paddingHorizontal: paddingContainer,
    flex: 1
  },
  content: {
    marginTop: '15%'
  },
  frameTitle: {
    color: "#121D29",
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 15
  },
  frame: {
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 30
  }
});
