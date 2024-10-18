import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react';

export default function AgeInput({ incrementScore, decrementScore, incrementCounter }) {
  const [age, setAge] = useState();
  const [lastValueIncremented, setLastValueIncremented] = useState(0);
  const [firstPress, setFirstPress] = useState(true);

  const handleEndEditing = () => {
    const ageInt = parseInt(age);

    if(firstPress && age > 0) {
      incrementCounter();
    }

    if (ageInt >= 50 && ageInt < 60) {
      decrementScore(lastValueIncremented);
      incrementScore(2);
      setLastValueIncremented(2)
    }

    if (ageInt >= 60 && ageInt < 70) {
      decrementScore(lastValueIncremented);
      incrementScore(3);
      setLastValueIncremented(3)
    }

    if (ageInt >= 70) {
      decrementScore(lastValueIncremented);
      incrementScore(4);
      setLastValueIncremented(4)
    }

    setFirstPress(false);
  };

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
          onEndEditing={handleEndEditing}
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