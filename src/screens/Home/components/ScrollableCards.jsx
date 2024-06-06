import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';
import Card from './Card';

export function ScrollableCards({ cardsList }) {
  return (
    <FlatList 
      data={cardsList}
      renderItem={({ item }) => <Card
        title={item.title} 
        description={item.description}
        img={item.img}
        onPress={item.onPress}
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
    paddingEnd: 8,
  },
});