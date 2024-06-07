# HypertensionCardsData
**cardsList** agora possue esses atributos para cada card, assim podemos tanto montar o card quanto passar o conteúdo para o modal: 

````javascript
  {
    cardTitle: "Genética",
    cardDescription: "Pode influenciar os níveis de pressão arterial entre...",
    cardImg: dnaImage,
    modalTitle: "DOENÇA RENAL CRÔNICA",
    modalSubtitle: "Genética",
    modalDescription: "Pode influenciar os níveis de pressão arterial entre 30-50%. No entanto, devido à ampla diversidade de genes, às variantes genéticas estudadas até o momento e aos grupos étnicos diferentes em nosso país, não foram identificados dados uniformes com relação a tal fator."
  },
````

# Tela de Hypertension
Temos o state que vai guadar o conteúdos do modal:

````javascript 
export default function Hypertension() {
  const modalizeRef = useRef(null);
  const [modalContent, setModalContent] = useState({ title: '', subtitle: '', content: '' });

  const handleCardPress = (title, subtitle, content) => {
    setModalContent({ title, subtitle, content });
    modalizeRef.current?.open();
  };
  ...
````
