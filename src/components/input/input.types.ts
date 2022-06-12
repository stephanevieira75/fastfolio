import { FastfolioColors, FastfolioSizes } from "../../types";

/**
 * @descrition The fastfolio input props.
 */
export type FastfolioInputProps = {
  /**
   * The onChange event of the input.
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   * @example
   * ```tsx
   * <Input onChange={(e) => console.log(e.target.value)} />
   * ```
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;

  /**
   * The color of the input.
   * @default "primary"
   * @type {FastfolioColors}
   * @example
   * ```tsx
   * <Input color="dark" onChange={e => console.log(e.target.value)} />
   * <Input color="light" onChange={e => console.log(e.target.value)} />
   * <Input color="primary" onChange={e => console.log(e.target.value)} />
   * <Input color="secondary" onChange={e => console.log(e.target.value)} />
   * <Input color="warning" onChange={e => console.log(e.target.value)} />
   * <Input color="error" onChange={e => console.log(e.target.value)} />
   * <Input color="success" onChange={e => console.log(e.target.value)} />
   * <Input color="ghost" onChange={e => console.log(e.target.value)} />
   * ```
   * @default "light"
   */
  color?: FastfolioColors;

  /**
   * The size of the input.
   * @default "medium"
   * @type {FastfolioSizes}
   * @example
   * ```tsx
   * <Input size="large" onChange={e => console.log(e.target.value)} />
   * <Input size="medium" onChange={e => console.log(e.target.value)} />
   * <Input size="small" onChange={e => console.log(e.target.value)} />
   * ```
   */
  size?: FastfolioSizes;

  /**
   * The border radius of the input.
   * @default "medium"
   * @type {FastfolioSizes}
   * @example
   * ```tsx
   * <Input borderRadius="large" onChange={e => console.log(e.target.value)} />
   * <Input borderRadius="medium" onChange={e => console.log(e.target.value)} />
   * <Input borderRadius="small" onChange={e => console.log(e.target.value)} />
   * ```
   */
  borderRadius?: FastfolioSizes;
} & DefaultInputPropsWithOmit;

/**
 * @descrition The default props of the input with the omitted props.
 */
type DefaultInputPropsWithOmit = Omit<
  React.HTMLProps<HTMLInputElement>,
  "onChange" | "size" | "color" | "borderRadius"
>;
