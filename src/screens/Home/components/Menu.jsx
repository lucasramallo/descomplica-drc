import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { mainColor, secondColor, backgroundColor } from '../../../../assets/constants/colors';
import { paddingContainer } from '../../../../assets/constants/constants';
import bebida from '../../../../assets/img/menu/bebida-alcoolica.png';
import controle from '../../../../assets/img/menu/controle-de-peso.png';
import dieta from '../../../../assets/img/menu/dieta.png';
import estresse from '../../../../assets/img/menu/estresse.png';
import exercicio from '../../../../assets/img/menu/exercicio.png';
import tabagismo from '../../../../assets/img/menu/tabagismo.png';
import WarningCard from '../../../components/WarningCard';
import safeIcon from '../../../../assets/img/classification-card/safe-icon.png';
import warningIcon from '../../../../assets/img/classification-card/warning-icon.png';

export default function Menu({ modalHandler }) {

  const TabagismoCustomComponent = () => {
    return (
      <>
        <Text style={styles.description}>O fumo é o único fator de risco totalmente evitável de doença e morte cardiovasculares, e seu enfrentamento precisa ser feito.</Text>
        <WarningCard 
          text="Se você costuma fumar, evite. Não precisa parar de vez, pare aos poucos. Procure ajuda de um profissional nesse momento."
          borderColor="#43BC64"
          backgroundColor="#EAF7EE"
          logo={safeIcon}
        />
        <WarningCard 
          text="Para você que não fuma, é importante se proteger da exposição fumo passivo (respirar a fumaça do fumo)."
          borderColor="#FF9C40"
          backgroundColor="#FEF4E2"
          logo={warningIcon}
        />
      </>
    )
  }

  const DietaCustomComponent = () => {
    return (
      <>
        <Text style={styles.description}>Há várias propostas de dietas para a prevenção da pressão alta. Tem destaque, a dieta DASH e suas variantes, que são: baixa quantidade de gordura, vegetais e verduras, baixo teor de carboidratos e etc. Os benefícios são ainda maiores quando ocorre em conjunto a redução de ingestão de sódio (sal).</Text>
        <WarningCard 
          text="Para uma  dieta mais adequada, procure um nutricionista."
          borderColor="#43BC64"
          backgroundColor="#EAF7EE"
          logo={safeIcon}
        />
        <Text style={styles.description}>O consumo elevado de sódio é um dos principais fatores de risco que podem ser modificados para a prevenção e o controle da pressão alta. Recomenda-se que o consumo de sódio seja limitado a aproximadamente 2g/dia (equivalente a cerca de 5g de sal por dia, uma colher de chá cheia), na população em geral.</Text>
      </>
    )
  }

  const data = [
    { id: '1', customComponent: null, image: controle, title: "Controle do peso", content: "A obesidade geral e a obesidade abdominal (gordura localizada na barriga) foram associadas ao aumento do risco de pressão arterial. A diminuição do peso promove a diminuição da  ressão, tanto em indivíduos com a pressão controlada, quanto em pressão descompensada. Ser “o mais magro possível” dentro da faixa da normalidade do IMC pode ser a melhor sugestão com relação à prevenção primária da pressão alta." },
    { id: '2', customComponent: null, image: dieta, title: "Dieta saudável", customContent: <DietaCustomComponent />},
    { id: '3', customComponent: null, image: estresse, title: "Fatores psicossociais", content: "O controle do estresse emocional, por diversas técnicas existentes, como a técnica de relaxamento, por exemplo, pode contribuir para a prevenção da pressão alta." },
    { id: '4', customComponent: null, image: exercicio, title: "Atividade física", content: " Os exercícios como caminhada, corrida, ciclismo ou natação são alidados para controle da pressão alta e podem ser praticados por 30 minutos em 5 a 7 dias por semana. \n\nLembre-se sempre optar por algum exercício que goste. \n\nLembre-se também de ter acompanhamento de um profissional da área quando for praticar alguma atividade física." },
    { id: '5', customComponent: null, image: bebida, title: "Álcool", content: "Se você gosta de consumir álcool, esse consumo deve ser limitado a 30g de álcool por dia, o que equivale a: 1 garrafa de cerveja; 2 taças de vinho ou 1 dose de destilados (uísque, vodka, cachaça...). Se você for homem e tiver com baixo peso, ou se for homem ou mulher em sobrepeso com triglicerídeos elevado, deve reduzir essas doses citadas pela metade." },
    { id: '6', image: tabagismo, title: "Tabagismo", customContent: <TabagismoCustomComponent />},
  ];

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => modalHandler("Hipertensão Arterial", item.title, item.content, item.customContent)}>
       <Image style={styles.img} source={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>      
        {data.map( (item) => (
          <Item item={item} key={item.id} />
        ) )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: backgroundColor,
    marginRight: paddingContainer,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'   
  },
  card: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 65,
    height: 65
  },
  modalContainer: {
    justifyContent: "center",
    padding: paddingContainer
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 19,
    fontFamily: 'Inter_600SemiBold',
    color: '#121D29',
    marginBottom: 22
  },
  subtitle: {
    marginVertical: 5,
    fontSize: 19,
    color: '#121D29',
    fontFamily: 'Inter_600SemiBold',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#414A54',
    textAlign: 'justify',
    marginBottom: 15
  },
  button: {
    backgroundColor: mainColor,
    width: "90%",
    padding: 10,
    marginHorizontal: "5%",
    marginVertical: 20,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold'
  }
});
