import React from 'react';
import { StyledButton, ButtonText } from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export function Button({ onPress, title }: ButtonProps) {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
}