import { StyleSheet, View } from "react-native";

export default function FeedbackDots({ score }) {
  const LEVELS = ["#66CA98", "#9BD88F", "#F8BD4C", "#EF5B2CBF", "#EF2C47BF"];
  const LEVEL = Math.min(Math.max(score, 1), LEVELS.length);

  return (
    <View style={styles.container}>
      {LEVELS.map((color, index) => (
        <View
          style={[
            styles.dot,
            {
              backgroundColor: color,
              borderWidth: index + 1 == LEVEL ? 3 : 0,
            },
          ]}
          key={index}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "center"
  },
  dot: {
    height: 45,
    width: 45,
    borderRadius: 100,
  }
});
