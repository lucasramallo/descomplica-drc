import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../../assets/constants/colors'
import { paddingContainer } from '../../../../assets/constants/constants'
import bebida from '../../../../assets/img/menu/bebida-alcoolica.png'
import controle from '../../../../assets/img/menu/controle-de-peso.png'
import dieta from '../../../../assets/img/menu/dieta.png'
import estresse from '../../../../assets/img/menu/estresse.png'
import pulmoes from '../../../../assets/img/menu/pulmoes.png'
import tabagismo from '../../../../assets/img/menu/tabagismo.png'


export default function Menu() {
  const data = [
    { id: '1', image: bebida },
    { id: '2', image: controle },
    { id: '3', image: dieta },
    { id: '4', image: estresse },
    { id: '5', image: pulmoes },
    { id: '6', image: tabagismo },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
       <Image style={styles.img} source={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    marginRight: paddingContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  card: {
    width: 95,
    height: 85,
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 65,
    height: 65
  }
});
