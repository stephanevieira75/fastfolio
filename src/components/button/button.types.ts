import { FastfolioColors, FastfolioSizes } from "../../types";

/**
 * @descrition The fastfolio button props.
 */
export type FastfolioButtonProps = {
  /**
   * The size of the button.
   * @default "medium"
   * @type {FastfolioSizes}
   * @example
   * ```tsx
   * <Button size="large">Large Button</Button>
   * <Button size="medium">Medium Button</Button>
   * <Button size="small">Small Button</Button>
   * ```
   */
  size?: FastfolioSizes;

  /**
   * The color of the button.
   * @default "primary"
   * @type {FastfolioColors}
   * @example
   * ```tsx
   * <Button color="dark">Dark Button</Button>
   * <Button color="light">Light Button</Button>
   * <Button color="primary">Primary Button</Button>
   * <Button color="secondary">Secondary Button</Button>
   * <Button color="warning">Warning Button</Button>
   * <Button color="error">Error Button</Button>
   * <Button color="success">Success Button</Button>
   * <Button color="ghost">Ghost Button</Button>
   * ```
   */
  color?: FastfolioColors;

  /**
   * The border radius of the button.
   * @default "medium"
   * @type {FastfolioSizes}
   * @example
   * ```tsx
   * <Button borderRadius="large">Large Button</Button>
   * <Button borderRadius="medium">Medium Button</Button>
   * <Button borderRadius="small">Small Button</Button>
   * ```
   */
  borderRadius?: FastfolioSizes;

  /**
   * The type of the button.
   * @default "button"
   * @type {"submit" | "reset" | "button" | undefined}
   * @example
   * ```tsx
   * <Button type="button">Button</Button>
   * <Button type="submit">Submit</Button>
   * <Button type="reset">Reset</Button>
   * ```
   */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & DefaultButtonPropsWithOmit;

/**
 * @descrition The default props of the button with the omitted props.
 */
type DefaultButtonPropsWithOmit = Omit<
  React.HTMLProps<HTMLButtonElement>,
  "size" | "color" | "borderRadius" | "type"
>;
