import React from 'react';
import { Alert } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient, StyledTextInput } from './styles';
import { Button } from '../../components/Button';
import { ButtonItem } from '../../components/ButtonItem';
import { ItemList } from '../../components/ItemList';
import { storeData } from '../../store';
import theme from '../../global/styles/theme';

const cursos = [
  'Licenciatura em Ciências Biológicas',
  'Licenciatura em Matemática',
  'Licenciatura em Química',
  'Licenciatura em Física',
  'Licenciatura em Pedagogia',
  'Bacharelado em Medicina Veterinária',
  'Bacharelado em Engenharia Florestal',
  'Bacharelado em Engenharia de Alimentos',
  'Bacharelado em Sistemas de Informação',
  'Técnico em Informática',
  'Técnico em Agropecuária',
  'Técnico em Agroindústria',
  'Outro: Qual?'
];

const setores = [
  'Direção Geral',
  'Coordenação de Gabinete',
  'Coordenação de Gestão de Pessoas - CGP',
  'Departamento Financeiro - Compras',
  'Direção de Ensino',
  'Diretoria de Pesquisa',
  'Diretoria de Extensão',
  'Docentes',
  'Setor de Estágio',
  'Núcleo Pedagógico',
  'CGAE',
  'Almoxarifado',
  'Biblioteca',
  'Secretaria',
  'Gestão de Tecnologia da Informação - CGTI',
  'Segurança - Vigilância',
  'Lavanderia',
  'Fadetec',
  'Outro: Qual?'
];

export function CursoSetor() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'CursoSetor'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'CursoSetor'>>();
  const type = route.params.type;

  const data = type === 'Curso' ? cursos : setores;
  const [showData, setShowData] = React.useState(false);

  const [selectedData, setSelectedData] = React.useState<string | null>(null);
  const [otherData, setOtherData] = React.useState('');
  const [showInput, setShowInput] = React.useState(false);

  const handlePressItem = (item: string) => {
    setSelectedData(item);
    if (item === 'Outro: Qual?') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleConfirm = async () => {
    if (selectedData === null || (selectedData === 'Outro: Qual?' && otherData === '')) {
      Alert.alert('Erro', `Por favor, selecione ou digite um ${type}`, [{ text: 'OK' }]);
    } else {
      const dataToStore = selectedData === 'Outro: Qual?' ? otherData : selectedData;
      await storeData(type, dataToStore);
      navigation.navigate('Quiz');
    }
  };

  const handleToggleData = () => {
    setShowData(!showData);
    setShowInput(false);
  };

  return (
    <StyledLinearGradient
      colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Title>Qual é o seu {type}?</Title>
      <ButtonItem title={showData ? `Selecione o ${type}   ▲` : `Selecione o ${type}   ▼`} onPress={handleToggleData} />
      {showData && <ItemList data={data} onPressItem={handlePressItem} />}
      {showData && showInput && selectedData === 'Outro: Qual?' &&
        <StyledTextInput
          placeholder={`Digite o ${type}`}
          value={otherData}
          onChangeText={setOtherData}
        />
      }
      <Button title="Confirmar" onPress={handleConfirm} />
    </StyledLinearGradient>
  );
}