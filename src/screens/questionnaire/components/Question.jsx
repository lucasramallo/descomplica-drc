import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { mainColor } from "../../../../assets/constants/colors";
import { useState, useEffect } from "react";

export default function Question({
  title,
  value1,
  value2,
  incrementScore,
  decrementScore,
  incrementAnswersCounter,
}) {
  const [selected, setSelected] = useState("");
  const [firstPress, setFirstPress] = useState(true);

  const incrementScoreHandler = () => {
    if(firstPress){
      incrementAnswersCounter();
    }

    incrementScore();
    setFirstPress(false);
  }

  const decrementScoreHandler = () => {
    if(firstPress) {
      incrementAnswersCounter();
    } else {
      decrementScore();
    }

    setFirstPress(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelected("option1");
            incrementScoreHandler();
          }}
          disabled={selected === "option1"}
          style={[
            styles.button,
            selected === "option1" && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              selected === "option1" && styles.SelectedButtonText,
            ]}
          >
            {value1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelected("option2");
            decrementScoreHandler();
          }}
          disabled={selected === "option2"}
          style={[
            styles.button,
            selected === "option2" && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              selected === "option2" && styles.SelectedButtonText,
            ]}
          >
            {value2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  description: {
    color: "#2A343F",
    fontFamily: "Inter_400Regular",
    fontSize: 17,
    textAlign: "justify",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 110,
    height: 50,
    borderWidth: 1,
    borderColor: mainColor,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedButton: {
    width: 110,
    height: 50,
    borderWidth: 1,
    borderColor: mainColor,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: mainColor,
  },
  buttonText: {
    fontFamily: "Inter_500Medium",
    color: mainColor,
  },
  SelectedButtonText: {
    fontFamily: "Inter_500Medium",
    color: "#fff",
  },
});
