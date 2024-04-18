import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { paddingContainer } from '../../../../assets/constants/constants';
import img from '../../../../assets/img/aspas.png';

export default function MessageCard({ message }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{message}</Text>
          </View>
          <Image style={styles.img} source={img} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: paddingContainer,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 18,
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 30,
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
  text: {
    fontFamily: 'Epilogue_400Regular',
    fontSize: 14,
    color: '#797F87',
    textAlign: 'justify',
    textAlignVertical: 'center',
  },
  img: {
    width: 34,
    height: 25,
    marginLeft: 10,
  },
});
