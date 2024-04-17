// ScrollableCards.js
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';
import Card from './Card';
import rim from '../../../../assets/img/rins.png'


export function ScrollableCards({ cardsList }) {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContent}
      showsHorizontalScrollIndicator={false}
    >
      {cardsList ? cardsList.map((card, i) => <Card title={card.title} description={card.description} img={card.img} key={i} />) : null}
    </ScrollView>
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
