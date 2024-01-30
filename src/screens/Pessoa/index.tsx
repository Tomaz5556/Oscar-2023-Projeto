import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';
import { storeData } from '../../store';
import theme from '../../global/styles/theme';

export function Pessoa() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Pessoa'>>();

  return (
    <StyledLinearGradient
      colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Title>Quem você é?</Title>
      <Button title="Aluno" onPress={() => { navigation.navigate('CursoSetor', { type: 'Curso' }); storeData('Pessoa', 'Aluno'); }} />
      <Button title="Servidor" onPress={() => { navigation.navigate('CursoSetor', { type: 'Setor' }); storeData('Pessoa', 'Servidor'); }} />
    </StyledLinearGradient>
  );
}