import { StyleSheet, View } from 'react-native';
import safeIcon from '../../assets/img/classification-card/safe-icon.png';
import safeIcon2 from '../../assets/img/classification-card/safe-icon2.png';
import warningIcon from '../../assets/img/classification-card/warning-icon.png';
import dangerousIcon from '../../assets/img/classification-card/dangerous-icon.png';
import WarningCard from './WarningCard';

export default function ClassificationCard() {
  return (
    <View>
      <WarningCard
        title="Estágio 1 - Maior que 90 ml/min"
        text="Os rins têm um bom funcionamento, porém já apresenta lesão moderada com presença de proteína na urina."
        borderColor="#43BC64"
        backgroundColor="#EAF7EE"
        logo={safeIcon}
        defaultHeight={true}
      />
      <WarningCard 
        title="Estágio 2 - 60 a 89 ml/min"
        text="Leve reduzida no funcionamento dos rins."
        borderColor="#76B888"
        backgroundColor="#F2FCE9"
        logo={safeIcon2}
        defaultHeight={true}
      />
      <WarningCard 
        title="Estágio 3a - 45 a 59 ml/min"
        text="Leve a moderada reduzida no funcionamento dos rins."
        borderColor="#B5AA4F"
        backgroundColor="#FFFEE0"
        logo={warningIcon}
        defaultHeight={true}
      />
      <WarningCard 
        title="Estágio 3b - 30 a 44 ml/min"
        text="Moderada a severa reduzida no funcionamento dos rins."
        borderColor="#FF9C40"
        backgroundColor="#FEF4E2"
        logo={warningIcon}
        defaultHeight={true}
      />
      <WarningCard 
        title="Estágio 4 - 15 a 29 ml/min"
        text="Severa reduzida no funcionamento dos rins."
        borderColor="#FF7878"
        backgroundColor="#FFF5F5"
        logo={dangerousIcon}
        defaultHeight={true}
      />
      <WarningCard 
        title="Estágio 5 - Menor que 15 a 29 ml/min"
        text="Os rins não funcionam mais."
        borderColor="#FF6868"
        backgroundColor="#FFECEC"
        logo={dangerousIcon}
        defaultHeight={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35
  }, 
  textView: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    marginBottom: 15
  },
  text: {
    color: '#414B4B',
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    textAlign: 'justify'
  }
})
