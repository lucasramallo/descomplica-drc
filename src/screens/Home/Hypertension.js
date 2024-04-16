import { View, Text, StyleSheet } from 'react-native';
import { mainColor } from '../../../assets/constants/colors'
import { paddingContainer } from '../../../assets/constants/constants'
import { ScrollableCards } from './components/ScrollableCards';

export default function Hypertension() {
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
    backgroundColor: '#fff',
    paddingLeft: paddingContainer,
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 17,
    marginBottom: 12
  }
});
