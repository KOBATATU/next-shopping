import React, { useRef, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  CheckBoxOutlineBlankIcon,
  CheckBoxIcon,
} from "components/atoms/IconButton";
import Text from "components/atoms/Text";
import Flex from "components/layout/Flex";
import { set } from "react-hook-form";

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  /**
   * 表示ラベル
   */
  label?: string;
}

const CheckBoxElement = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`;

const checkBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...rest } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const ref = useRef<HTMLInputElement>(null);
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      //チェックボックスのクリック時、既定の動作ではチェックボックスが切り替わらないようにする
      //https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
      e.preventDefault();

      ref.current?.click();
      setIsChecked((isChecked) => !isChecked);
    },
    [ref, setIsChecked]
  );

  useEffect(() => {
    //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    setIsChecked(checked ?? false);
  }, [checked]);

  return (
    <>
      <CheckBoxElement
        {...rest}
        ref={ref}
        onChange={onChange}
        type="checkbox"
        checked={isChecked}
        //propsにonChangeがない場合trueになる
        readOnly={!onChange}
      />
      <Flex alignItems="center">
        {/* チェックボックスのON/OFFの描画 */}
        {/* (checked ?? isChecked) ? :  という三項演算子 */}
        {isChecked ? (
          <CheckBoxIcon size={20} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
        )}
        {/* チェックボックスのラベル */}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            <Text>{label}</Text>
          </Label>
        )}
      </Flex>
    </>
  );
};

export default checkBox;
