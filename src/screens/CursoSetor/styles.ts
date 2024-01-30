import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const StyledLinearGradient = styled(LinearGradient)`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  top: 15px;
  padding: 50px 20px 20px 20px;
  margin-bottom: 40px;
`;

export const StyledTextInput = styled.TextInput.attrs(props => ({
  selectionColor: props.theme.colors.dark
}))`
  background-color: ${({ theme }) => theme.colors.light};
  border: 3px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 24px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 10px;
  text-align: center;
  border-radius: 15px;
`;