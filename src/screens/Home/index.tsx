import React from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Title, OscarImg, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';
import theme from '../../global/styles/theme';

const estatueta = require('../../../assets/images/estatueta-oscar.png');

export function Home() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => true;

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <StyledLinearGradient
      colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Title>Qual filme indicado ao Oscar 2023 você deve assistir?</Title>
      <OscarImg source={estatueta} />
      <Button title="Iniciar" onPress={() => navigation.navigate('Idade')} />
    </StyledLinearGradient>
  );
}