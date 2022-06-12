import React, { FunctionComponent } from "react";
import classnames from "classnames";

import type { FastfolioButtonProps } from "./button.types";
import {
  getCurrentHeight,
  getCurrentBorderRadius,
  getCurrentColor,
  getCurrentWidth
} from "../../utils";

import buttonStyles from "./button.module.scss";

/**
 * @component Button
 * @props {FastfolioButtonProps}
 * @example
 * ``` tsx
 * import { Button } from "fastfolio";
 *
 * const App = () => {
 *   return (
 *     <Button
 *       color="primary"
 *       size="large"
 *       borderRadius="large"
 *       onClick={(_e) => console.log("onClickCoolBtn")}
 *      >
 *       Cool btn
 *     </Button>
 *   );
 * };
 * ```
 */
export const Button: FunctionComponent<FastfolioButtonProps> = ({
  className,
  color,
  children,
  borderRadius,
  size,
  ...props
}) => (
  <button
    {...props}
    className={classnames(
      buttonStyles.button,
      getCurrentColor(color ?? "primary"),
      getCurrentHeight(size ?? "medium"),
      getCurrentWidth(size ?? "medium"),
      getCurrentBorderRadius(borderRadius ?? "medium"),
      className
    )}
  >
    {children}
  </button>
);

export default Button;
