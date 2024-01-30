import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Idade } from '../screens/Idade';
import { Pessoa } from '../screens/Pessoa';
import { CursoSetor } from '../screens/CursoSetor';
import { Quiz } from '../screens/Quiz';

export type RootStackParamList = {
  Home: undefined;
  Idade: undefined;
  Pessoa: undefined;
  CursoSetor: { type: 'Curso' | 'Setor' };
  Quiz: undefined;
  Filme: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Idade" component={Idade} />
      <Stack.Screen name="Pessoa" component={Pessoa} />
      <Stack.Screen name="CursoSetor" component={CursoSetor} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}
