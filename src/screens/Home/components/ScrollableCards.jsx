import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';
import Card from './Card';

export function ScrollableCards({ cardsList }) {
  return (
    <ScrollView horizontal={true}>
      {cardsList.map(( item ) => <Card
        title={item.title} 
        description={item.description}
        img={item.img}
        key={item.title}
        />)}
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