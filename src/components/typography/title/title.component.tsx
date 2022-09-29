import React, { FunctionComponent } from "react";
// import classnames from "classnames";

import type { FastfolioTitleProps } from "./title.types";

/**
 * @component Title
 * @props {FastfolioTitleProps}
 * @example
 * ``` tsx
 * import Typography from "fastfolio";
 *
 * const { Title } = Typography;
 * const App = () => {
 *   return (
 *     <Title level={1} >
 *       Cool Title
 *     </Title>
 *   );
 * };
 * ```
 */
export const Title: FunctionComponent<FastfolioTitleProps> = ({
  level,
  ...props
}) => {
  const Tag = `h${level ?? 1}`;
  return <Tag {...props} />;
};

export default Title;
