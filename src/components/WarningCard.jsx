import { Image, Text, View,StyleSheet } from 'react-native';

export default function WarningCard({ title, text, borderColor, backgroundColor, logo, defaultHeight }) {
  return (
    <View style={{ 
      width: "100%", 
      minHeight: 100, 
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

        {
          title ? <Text style={styles.title}>{title}</Text> : null
        }
        
        <Text style={styles.text}>{text}</Text>
      </View>
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
    marginBottom: 3,
    textAlign: 'justify'
  }
})