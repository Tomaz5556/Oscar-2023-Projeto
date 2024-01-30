import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions, ScrollView } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';
import { Title, StyledLinearGradient } from './styles';
import { Button } from '../../components/Button';
import { Filme, FILMES } from '../Filme';
import theme from '../../global/styles/theme';

const QUESTIONS = [
  {
    question: 'Pronto para chorar?',
    answers: ['Já peguei o lenço', 'Nada de filme muito meloso'],
    next: [1, 2],
    filme: [null, null]
  },
  {
    question: 'Qual relacionamento é mais complicado para você?',
    answers: ['Família', 'Amizade'],
    next: [3, 4],
    filme: [null, null]
  },
  {
    question: 'Que tal um bando de ricaços malucos?',
    answers: ['Parece divertido', 'Parece chato'],
    next: [5, 6],
    filme: [null, null]
  },
  {
    question: 'Por que é complicado?',
    answers: ['Tenho que resolver tudo', 'Me sinto diferente'],
    next: [7, 8],
    filme: [null, null]
  },
  {
    question: 'Como você sabe quem é seu melhor amigo?',
    answers: ['Bebendo todos os dias', 'Situações de vida e morte'],
    next: [null, null],
    filme: [0, 1]
  },
  {
    question: 'E com assassinatos?',
    answers: ['Não. Apenas sexo, drogas e rock\'n roll', 'Sim!'],
    next: [null, 9],
    filme: [2, null]
  },
  {
    question: 'Gosta de épicos?',
    answers: ['Não! Prefiro histórias mais pessoais', 'Gosto de grandes produções'],
    next: [null, 10],
    filme: [3, null]
  },
  {
    question: 'Qual é a ameaça que você enfrenta?',
    answers: ['Distância dos filhos', 'Opressão Religiosa'],
    next: [11, null],
    filme: [null, 4]
  },
  {
    question: 'Você encontra soluções para seus desafios?',
    answers: ['Não muito', 'Sim, felizmente'],
    next: [null, 12],
    filme: [5, null]
  },
  {
    question: 'Quem você quer ridicularizar?',
    answers: ['Barões da tecnologia', 'Influencers'],
    next: [null, null],
    filme: [6, 7]
  },
  {
    question: 'Que tipo de emoção você quer?',
    answers: ['Alto astral', 'Desespero'],
    next: [null, null],
    filme: [8, 9]
  },
  {
    question: 'Qual comida te faz se sentir bem?',
    answers: ['Bagel de tudo', 'Pizza'],
    next: [null, null],
    filme: [10, 11]
  },
  {
    question: 'Gosta de animação?',
    answers: ['Sim', 'Não'],
    next: [null, null],
    filme: [12, 13]
  },
];

interface Filme {
  nome: string;
  imagem: any;
  descricao: string;
  diretor: string;
}

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<Filme | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const offset = useSharedValue(Dimensions.get('window').width);

  const handleAnswer = (answerIndex: number) => {
    const nextQuestionIndex = currentQuestion.next[answerIndex];
    if (nextQuestionIndex !== null) {
      setHistory([...history, currentQuestionIndex]);
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      const movieIndex = currentQuestion.filme[answerIndex];
      if (movieIndex !== null) {
        setSelectedMovie(FILMES[movieIndex]);
      }
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const lastQuestionIndex = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentQuestionIndex(lastQuestionIndex);
    }
  };

  useEffect(() => {
    const backAction = () => {
      handleBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [history]);

  useEffect(() => {
    offset.value = Dimensions.get('window').width;
    offset.value = withTiming(0, {
      duration: 1000,
      easing: Easing.ease,
    });
  }, [currentQuestionIndex, selectedMovie]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledLinearGradient
        colors={[theme.colors.background_dark, theme.colors.background_regular, theme.colors.background_light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {selectedMovie ? (
          <Animated.View style={animatedStyles}>
            <Filme filme={selectedMovie} />
          </Animated.View>
        ) : (
          <>
            <Animated.View style={animatedStyles}>
              <Title>{currentQuestion.question}</Title>
            </Animated.View>
            {currentQuestion.answers.map((answer, index) => (
              <Animated.View style={animatedStyles} key={index}>
                <Button title={answer} onPress={() => handleAnswer(index)} />
              </Animated.View>
            ))}
          </>
        )}
      </StyledLinearGradient>
    </ScrollView>
  );
}