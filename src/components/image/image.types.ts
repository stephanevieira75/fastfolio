import { FastfolioSizes } from "../../types";

/**
 * @descrition The fastfolio image props.
 */
export type FastfolioImageProps = {
  /**
   * The border radius of the image.
   * @default "medium"
   * @type {FastfolioSizes}
   * @example
   * ```tsx
   * <Image borderRadius="large" src="https://picsum.photos/200/300" />
   * <Image borderRadius="medium" src="https://picsum.photos/200/300" />
   * <Image borderRadius="small" src="https://picsum.photos/200/300" />
   * ```
   */
  borderRadius?: FastfolioSizes;

  /**
   * Display the image as a circle.
   * @default false
   * @type {boolean}
   * @example
   * ```tsx
   * <Image circle src="https://picsum.photos/200/300" />
   * ```
   */
  circle?: boolean;

  /**
   * The fallback image to display when the src image is not available.
   * @default undefined
   * @type {string}
   * @example
   * ```tsx
   * <Image fallback="https://picsum.photos/200/300" src="https://picsum.photos/200/300" />
   * ```
   */
  fallback?: string;
} & DefaultImageProps;

/**
 * @descrition The default props of the img tag.
 */
type DefaultImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
