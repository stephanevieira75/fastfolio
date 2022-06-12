import React, { FunctionComponent } from "react";
import classnames from "classnames";

import type { FastfolioInputProps } from "./input.types";
import {
  getCurrentColor,
  getCurrentBorderRadius,
  getCurrentHeight,
  getCurrentWidth
} from "../../utils";

import inputStyles from "./input.module.scss";

/**
 * @component Input
 * @props {FastfolioInputProps}
 * @example
 * ``` tsx
 * import { Input } from "fastfolio";
 *
 * const App = () => {
 *   return (
 *     <Input onChange={(e) => console.log("onChangeCoolInput", e.target.value)} />
 *   );
 * };
 * ```
 */
export const Input: FunctionComponent<FastfolioInputProps> = ({
  className,
  onChange,
  color,
  size,
  borderRadius,
  ...props
}) => (
  <input
    {...props}
    onChange={onChange}
    className={classnames(
      inputStyles.input,
      getCurrentColor(color ?? "light"),
      getCurrentHeight(size ?? "medium"),
      getCurrentWidth(size ?? "medium", "input"),
      getCurrentBorderRadius(borderRadius ?? "medium"),
      className
    )}
  />
);

export default Input;
