import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Card from './Card';

export function ScrollableCards({ cardsListData, modalHandler }) {
  function onPressHandler(item) {
    if(modalHandler) {
      //se for para abrir um modal, chama o modalHandler
      return () => modalHandler(item.modalTitle, item.modalSubtitle, item.modalDescription)
    }

    //se for para navegar para um tela, chama o onPress passado no Data
    return item.onPress
  }

  return (
    <FlatList
      data={cardsListData}
      renderItem={({ item }) => (
        <Card
          title={item.cardTitle}
          description={item.cardDescription}
          img={item.cardImg}
          onPress={onPressHandler(item)}
        />
      )}
      keyExtractor={card => card.description}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollViewContent}
    />
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingEnd: 8,
  },
});