// ScrollableCards.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';
import Card from './Card';
import rim from '../../../../assets/img/rins.png'


export function ScrollableCards({ cardsList }) {
  return (
    <FlatList 
      data={cardsList}
      renderItem={({ item }) => <Card
        title={item.title} 
        description={item.description}
        img={item.img}
        />}
      keyExtractor={card => card.title} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollViewContent} />
  );
}

const styles = StyleSheet.create({
  card: {
    width: 310,
    height: 150,
    marginEnd: 8,
    borderRadius: 8,
    backgroundColor: mainColor,
  },
  scrollViewContent: {
    paddingEnd: 16,
    marginBottom: 15
  },
});
