import styled from 'styled-components/native';

export const StyledView = styled.View`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  top: 15px;
  padding-top: 50px;
`;

export const Movie = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  padding-top: 20px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
`;

export const Director = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  padding: 15px 0px 15px 0px;
`;

export const Image = styled.Image`
  object-fit: fill;
  width: 200px;
  height: 320px;
  border-radius: 20px;
  margin: 20px;
`;