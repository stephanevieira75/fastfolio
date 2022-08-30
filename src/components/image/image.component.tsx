import React, { FunctionComponent } from "react";
import classnames from "classnames";

import { FastfolioImageProps } from "./image.types";
import { getCurrentBorderRadius } from "../../utils";

import imageStyles from "./image.module.scss";
import { useCurrentSrc } from "./image.utils";

/**
 * @component Image
 * @props {FastfolioImageProps}
 * @example
 * ``` tsx
 * import { Image } from "fastfolio";
 *
 * const App = () => {
 *   return (
 *     <Image
 *      circle={false}
 *      borderRadius="large"
 *      alt="This is a cool image"
 *      src="https://picsum.photos/200/300"
 *      fallback="https://picsum.photos/200/300"
 *     />
 *   );
 * };
 * ```
 */
export const Image: FunctionComponent<FastfolioImageProps> = ({
  className,
  borderRadius,
  circle,
  src,
  fallback = "./statics/images/image-no-preview.png",
  ...props
}) => {
  const currentSrc = useCurrentSrc(src, fallback);

  return (
    <img
      {...props}
      src={currentSrc}
      className={classnames(
        imageStyles.image,
        { [imageStyles.circle]: circle },
        getCurrentBorderRadius(borderRadius ?? "medium"),
        className
      )}
    />
  );
};

export default Image;
