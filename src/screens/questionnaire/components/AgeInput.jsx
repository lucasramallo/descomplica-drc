import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react';

export default function AgeInput() {
  const [age, setAge] = useState('');
  return (
    <View style={styles.content}>
      <Text style={styles.description}>Qual sua idade? </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Idade"
          value={age}
          onChangeText={setAge}
          maxLength={3}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 30,
  },
  input: {
    width: 140,
    height: 45,
    borderWidth: 1,
    borderColor: '#ABAFB1',
    borderRadius: 10,
    padding: 10
  },
  description: {
    color: "#2A343F",
    fontFamily: "Inter_400Regular",
    fontSize: 17,
    textAlign: 'justify',
    marginBottom: 10
  },
})