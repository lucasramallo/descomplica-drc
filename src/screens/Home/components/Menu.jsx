import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { backgroundColor } from '../../../../assets/constants/colors'
import { paddingContainer } from '../../../../assets/constants/constants'
import bebida from '../../../../assets/img/menu/bebida-alcoolica.png'
import controle from '../../../../assets/img/menu/controle-de-peso.png'
import dieta from '../../../../assets/img/menu/dieta.png'
import estresse from '../../../../assets/img/menu/estresse.png'
import exercicio from '../../../../assets/img/menu/exercicio.png'
import tabagismo from '../../../../assets/img/menu/tabagismo.png'


export default function Menu() {
  const data = [
    { id: '1', image: controle },
    { id: '2', image: dieta },
    { id: '3', image: estresse },
    { id: '4', image: exercicio },
    { id: '5', image: bebida },
    { id: '6', image: tabagismo },
  ];

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.card}>
       <Image style={styles.img} source={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>      
        {data.map( (item) => (
          <Item item={item} key={item.id} />
        ) )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: backgroundColor,
    marginRight: paddingContainer,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'   
  },
  card: {
    width: 75,
    height: 75,
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
