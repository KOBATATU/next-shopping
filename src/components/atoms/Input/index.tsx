import styled, { css } from "styled-components";
import { Responsive } from "types/styles";

import { FontSize, LineHeight, Space, toPropValue } from "utils/styles";
/**
 * テキストインプット
 */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  hasBorder?: boolean;
  fontSize?: Responsive<FontSize>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  outline?: Responsive<string>;
  padding?: Responsive<Space>;
  boxSizing?: Responsive<string>;
  lineHeight?: Responsive<LineHeight>;
};

const Input = styled.input<InputProps>`
  color: ${({ theme }) => theme.colors.inputText};
  ${({ theme, hasBorder, hasError }) => {
    if (hasBorder) {
      return css`
        border: 1px solid
          ${hasError ? theme.colors.danger : theme.colors.border};
        border-radius: 5px;
      `;
    } else {
      return css`
        border: none;
      `;
    }
  }}
  ${(props) => toPropValue("padding", props.padding, props.theme)}
  ${(props) => toPropValue("box-sizing", props.padding, props.theme)}
  ${(props) => toPropValue("width", props.width, props.theme)}
  ${(props) => toPropValue("height", props.height, props.theme)}
  ${(props) => toPropValue("font-size", props.fontSize, props.theme)}
  ${(props) => toPropValue("line-height", props.lineHeight, props.theme)}
  ${(props) => toPropValue("outline", props.outline, props.theme)}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

Input.defaultProps = {
  padding: "11px 12px 12px 9px",
  boxSizing: "border-box",
  outline: "none",
  width: "100%",
  height: "38px",
  fontSize: "16px",
  lineHeight: "19px",
  hasBorder: true,
  hasError: false,
};

export default Input;
