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
        <Text>{content}</Text>
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
    fontSize: 17,
    fontWeight: "700"
  },
  subtitle: {
    marginVertical: 5,
    fontWeight: "700"
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
    textAlign: "center"
  }
});