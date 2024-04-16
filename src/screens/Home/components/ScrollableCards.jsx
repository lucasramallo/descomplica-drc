// ScrollableCards.js
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';

const Card = ({ index }) => (
  <TouchableOpacity style={styles.card}>
    {}
  </TouchableOpacity>
);

export function ScrollableCards() {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContent}
      showsHorizontalScrollIndicator={false}
    >
      {[...Array(6)].map((_, index) => (
        <Card key={index} index={index} />
      ))}
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
