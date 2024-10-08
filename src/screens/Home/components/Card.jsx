import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';

export default function Card({ index, title, description, img, onPress, disable, reversed }) {
  return (
    <TouchableOpacity disabled={disable || false} onPress={onPress} style={styles.card} >
      <View style={[styles.content, reversed && { flexDirection: 'row-reverse', gap: 10} ]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Image style={styles.img} source={img} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    minWidth: 310,
    height: 150,
    marginEnd: 8,
    borderRadius: 18,
    backgroundColor: mainColor,
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 26,
    color: '#fff',
    marginBottom: 5,
    width: 220,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#fff',
    width: 190,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginLeft: -3
  }
});
