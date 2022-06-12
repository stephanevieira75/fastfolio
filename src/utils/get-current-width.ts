import { sizesStyles } from "../styles";
import { FastfolioSizes } from "../types";

export const getCurrentWidth = (
  size: FastfolioSizes,
  type?: string
): string => {
  const mapWidth = new Map<FastfolioSizes, string>();
  const componentType = type ? `${type}-` : "";

  mapWidth.set("large", sizesStyles[`${componentType}width-lg`]);
  mapWidth.set("medium", sizesStyles[`${componentType}width-md`]);
  mapWidth.set("small", sizesStyles[`${componentType}width-sm`]);

  return mapWidth.get(size) ?? "";
};
