import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';

export default function Content({ title, subtitle, content }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.content}>{content}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#121D29",
    fontFamily: "Inter_600SemiBold",
    fontSize: 24,
    marginBottom: 22
  },
  subtitle: {
    color: "#121D29",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
  },
  content: {
    color: "#2A343F",
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    textAlign: 'justify'
  },
});