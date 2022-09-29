/**
 * @descrition The fastfolio title props.
 */
export type FastfolioTitleProps = {
  level?: 1 | 2 | 3 | 4 | 5;
} & DefaultTitlePropsWithOmit;

/**
 * @descrition The default props of the title heading element.
 */
type DefaultTitlePropsWithOmit = React.HTMLProps<HTMLHeadingElement>;
