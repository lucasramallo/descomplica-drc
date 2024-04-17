import { View, Text, StyleSheet } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors'
import { paddingContainer } from '../../../assets/constants/constants'
import { ScrollableCards } from './components/ScrollableCards';

export default function DRC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entenda</Text>
      <ScrollableCards />
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
