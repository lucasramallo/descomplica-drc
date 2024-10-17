import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { mainColor } from '../../assets/constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function Button({ onPress }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress ? onPress : () => navigation.navigate("Home")} style={styles.container}>
      <Text style={styles.text}>Sair</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 10.,
    backgroundColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  text: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
    color: '#fff'
  }
})