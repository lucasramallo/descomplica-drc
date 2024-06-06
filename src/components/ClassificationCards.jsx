import { Image, StyleSheet, Text, View } from 'react-native'
import safeIcon from '../../assets/img/classification-card/safe-icon.png';
import safeIcon2 from '../../assets/img/classification-card/safe-icon2.png';
import warningIcon from '../../assets/img/classification-card/warning-icon.png';
import dangerousIcon from '../../assets/img/classification-card/dangerous-icon.png';

function Card({ title, text, borderColor, backgroundColor, logo }) {
  return (
    <View style={{ 
      width: "100%", 
      minHeight: 135, 
      borderWidth: 1, 
      borderRadius: 20,
      borderColor: borderColor, 
      backgroundColor: backgroundColor, 
      flexDirection: 'row', 
      paddingVertical: 20, 
      paddingHorizontal: 15,
      marginBottom: 15,
    }}>
      <Image style={styles.icon} source={logo} />
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default function ClassificationCard() {
  return (
    <View>
      <Card 
        title="Estágio 1 - Maior que 90 ml/min5"
        text="Os rins tem um bom funcionamento, porém já apresenta lesão moderada com presença de proteína na urina"
        borderColor="#43BC64"
        backgroundColor="#EAF7EE"
        logo={safeIcon}
      />
      <Card 
        title="Estágio 2 - 60 a 89 ml/min"
        text="Leve reduzida no funcionamento dos rins"
        borderColor="#76B888"
        backgroundColor="#F2FCE9"
        logo={safeIcon2}
      />
      <Card 
        title="Estágio 3a - 45 a 59 ml/min"
        text="Leve a moderada reduzida no funcionamento dos rins"
        borderColor="#B5AA4F"
        backgroundColor="#FFFEE0"
        logo={warningIcon}
      />
      <Card 
        title="Estágio 3b - 30 a 44 ml/min"
        text="Moderada a severa reduzida no funcionamento dos rins"
        borderColor="#FF9C40"
        backgroundColor="#FEF4E2"
        logo={warningIcon}
      />
      <Card 
        title="Estágio 4 - 15 a 29 ml/min"
        text="Severa reduzida no funcionamento dos rins"
        borderColor="#FF6868"
        backgroundColor="#FFECEC"
        logo={dangerousIcon}
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
