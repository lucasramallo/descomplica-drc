import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { mainColor } from '../../../../assets/constants/colors';
import { paddingContainer } from '../../../../assets/constants/constants';

export default function Modal({ modalizeRef, title, subtitle, content }){
  return (
    <Modalize 
      ref={modalizeRef}
      adjustToContentHeight={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{content}</Text>
        <TouchableOpacity style={styles.button} onPress={() => modalizeRef.current?.close()}>
          <Text style={styles.buttonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: paddingContainer
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 19,
    fontFamily: 'Inter_600SemiBold',
    color: '#121D29',
    marginBottom: 22
  },
  subtitle: {
    marginVertical: 5,
    fontSize: 19,
    color: '#121D29',
    fontFamily: 'Inter_600SemiBold',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#414A54',
    textAlign: 'justify',
    marginBottom: 15
  },
  button: {
    backgroundColor: mainColor,
    width: "90%",
    padding: 10,
    marginHorizontal: "5%",
    marginVertical: 20,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold'
  }
});