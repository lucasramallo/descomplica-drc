import { ScrollView, View, Text, StyleSheet } from "react-native";
import Content from "../../components/Content";
import FeedbackDots from "./components/FeedbackDots";
import { paddingContainer } from "../../../assets/constants/constants";
import Button from "../../components/Button";

export default function Classification({ navigation, route }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "space-between" }} style={styles.container}>
      <View>
        <Content
          title={"QUESTIONÁRIO"}
          subtitle={"Resultado"}
          content={
            "Os resultados aqui apresentados são baseados apenas em uma análise superficial sobre a existência de fatores de risco. Para obter um diagnóstico preciso, consulte um profissional da saúde."
          }
        />

        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>
            Pontuação: {route.params.score} pontos
          </Text>
        </View>

        <FeedbackDots score={route.params.score} />

        {route.params.score < 4 ? (
          <View
            style={[
              styles.warningBox,
              { borderColor: "#FF9C40", backgroundColor: "#FEF4E2" },
            ]}
          >
            <Text>
              Você provavelmente{" "}
              <Text style={{ fontWeight: "bold" }}>
                não tem uma doença renal agora
              </Text>
              , mas, pelo menos uma vez por ano, você deve fazer esta pesquisa.
            </Text>
          </View>
        ) : (
          <View
            style={[
              styles.warningBox,
              { borderColor: "#FF6868", backgroundColor: "#FFECEC" },
            ]}
          >
            <Text>
              Você tem uma chance em cinco de ter doença renal crônica, mas
              calma! Somente um profissional de saúde pode determinar se você
              tem doença renal. Na próxima consulta, converse com seu médico!
            </Text>
          </View>
        )}
      </View>

      <Button />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingContainer,
    paddingTop: "15%"
  },
  scoreBox: {
    borderWidth: 1,
    borderColor: "#66CA98",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 25,
    borderRadius: 10,
    paddingVertical: 10,
  },
  scoreText: {
    fontFamily: "Inter_500Medium",
    color: "#66CA98",
  },
  warningBox: {
    width: "100%",
    minHeight: 100,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop: 50,
  },
});
