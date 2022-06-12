import { bordersStyles } from "../styles";
import { FastfolioSizes } from "../types";

export const getCurrentBorderRadius = (radius: FastfolioSizes): string => {
  switch (radius) {
    case "large":
      return bordersStyles["border-radius-lg"];
    case "small":
      return bordersStyles["border-radius-sm"];
    case "medium":
    default:
      return bordersStyles["border-radius-md"];
  }
};
