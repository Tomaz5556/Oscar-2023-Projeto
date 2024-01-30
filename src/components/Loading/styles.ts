import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator } from 'react-native';

export const StyledLinearGradient = styled(LinearGradient)`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledActivityIndicator = styled(ActivityIndicator)`
  display: flex;
`;