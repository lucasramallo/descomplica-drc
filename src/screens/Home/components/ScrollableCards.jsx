// ScrollableCards.js
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';
import Card from './Card';
import rim from '../../../../assets/img/rins.png'


export function ScrollableCards() {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContent}
      showsHorizontalScrollIndicator={false}
    >
      <Card 
        title="Definição" 
        description="É caracterizada por anormalidades na estrutura e/ou função renal que..." 
        img={rim}
      />

      <Card 
        title="Definição" 
        description="É caracterizada por anormalidades na estrutura e/ou função renal que..." 
        img={rim}
      />
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
