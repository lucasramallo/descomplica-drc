 import { useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../assets/constants/colors';
import { paddingContainer } from '../../../assets/constants/constants';
import { ScrollableCards } from './components/ScrollableCards';
import heartIcon from '../../../assets/img/heatIcon.png'
import Menu from './components/Menu';
import MessageCard from './components/MenssageCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { cardsList } from '../Home/data/HypertensionCardsData'
import Modal from './components/Modal';

export default function Hypertension() {
  const modalizeRef = useRef(null);
  const [modalContent, setModalContent] = useState({ title: '', subtitle: '', content: '', customContent: null });

  const modalHandler = (title, subtitle, content, customContent) => {
    setModalContent({ title, subtitle, content,  customContent});
    modalizeRef.current?.open();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Entenda sobre Hipertensão Arterial</Text>
        <View style={styles.cardView}>
          <TouchableOpacity style={styles.card} onPress={() => modalHandler(
            "HIPERTENSÃO ARTERIAL", 
            "Definição", 
            "É considerada uma doença crônica, não transmissível caracterizada pela elevação persistente a pressão arterial (PA) a níveis maior ou igual a 140/90 mmHg. A medida deve ser realizada de acordo com a técnica correta, em pelo menos, duas ocasiões diferentes e na ausência de medicação anti-hipertensiva."
          )}>
            <View style={styles.content}>
              <Image style={styles.img} source={heartIcon} />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{"Definição"}</Text>
                <Text style={styles.description}>{"O que é Hipertensão Arterial?"}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
        <Text style={[styles.text, {fontWeight: 'bold'}]}>Fatores de risco</Text>
        <ScrollableCards cardsListData={cardsList} modalHandler={modalHandler} />

        <Text style={[styles.text, {fontWeight: 'bold'}]}>Prevenção</Text>
        <Menu modalHandler={modalHandler} />

        <MessageCard message="A saúde é a riqueza mais valiosa, cuide dela como o seu maior tesouro." />
      </ScrollView>

      <Modal
        modalizeRef={modalizeRef}
        title={modalContent.title}
        subtitle={modalContent.subtitle}
        content={modalContent.content}
        customContent={modalContent.customContent}
      />

    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    paddingLeft: paddingContainer,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 25,
    marginTop: 15,
    color: '#4D4D56'
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    marginBottom: 12,
    marginTop: 30,
    color: '#767175',
    marginLeft: 5
  },
  cardView: {
    marginRight: paddingContainer,
  },
  card: {
    width: '100%',
    height: 80,
    marginEnd: 8,
    borderRadius: 18,
    backgroundColor: mainColor,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#fff',
    marginBottom: -3
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#fff',
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginRight: 10 
  }
});
