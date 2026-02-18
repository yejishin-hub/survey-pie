import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

const colorMap = {
  PRIMARY, // ===> PRIMARY: PRIMARY 을 축약한 것
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${colorMap[type].BUTTON.DEFAULT.BORDER}`
      : 'none'};

  // &:hover, &:active, &:disabled 는 가상 클래스라고 불리는 것들입니다. [SCSS 문법]
  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;
