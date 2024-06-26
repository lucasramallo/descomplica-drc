import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { mainColor } from '../../../../assets/constants/colors';
import Card from './Card';

export function ScrollableCards({ cardsListData, modalHandler }) {
  function onPressHandler(item) {
    if(modalHandler) {
      //se for para abrir um modal, chama o modalHandler
      return () => modalHandler(item.modalTitle, item.modalSubtitle, item.modalDescription)
    }

    //se for para navegar para uma tela, chama o onPress passado no Data
    return item.onPress
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {cardsListData.map(( item, index ) => ( 
        <Card
          title={item.cardTitle} 
          description={item.cardDescription}
          img={item.cardImg}
          key={item.cardTitle || index}
          disable={item.disable}
          onPress={onPressHandler(item)}
          reversed={item.reversed}
        />)) }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingEnd: 8,
  },
});