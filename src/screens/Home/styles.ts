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
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  top: 15px;
  padding: 50px 20px 20px 20px;
`;

export const OscarImg = styled.Image`
  object-fit: contain;
  width: 40%;
  height: 40%;
`;