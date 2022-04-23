import styled from 'styled-components';
import { colors } from '../styles';

const Button = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: 15px;
  color: #000;
  font-size: 18px;
  height: 46px;
  padding-left: 30px;
  padding-right: 30px;
`;

export default Button;
