import { colorsStyles } from "../styles";

import { FastfolioColors } from "../types";

export const getCurrentColor = (color: FastfolioColors): string =>
  colorsStyles[color ? (color as keyof typeof colorsStyles) : "primary"];
