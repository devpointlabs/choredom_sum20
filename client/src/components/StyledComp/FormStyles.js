import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const Btn = styled.button`
  border-radius: 8px; 
  border: none;
  padding: 15px 22px;
  width: 118px;
  height: 56px;
  font-family: 'Work Sans';
  font-size: 18px;
  color: white;
  background-color: #272643;
  cursor: pointer;
`;

export const TextInput = styled(Form.Input)`
  border: none;
  background: #F2F3F4;
  border-bottom: 1px solid #000000;
`;

export const InputLabel = styled.text`
  height: 22px;
  weight: 400;
  font-family: 'Work Sans';
  font-size: 18px;
`;