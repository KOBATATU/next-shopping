import React, { useRef, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  CheckBoxOutlineBlankIcon,
  CheckBoxIcon,
} from "components/atoms/IconButton";
import Text from "components/atoms/Text";
import Flex from "components/layout/Flex";

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  /**
   * 表示ラベル
   */
  label?: string;
}
