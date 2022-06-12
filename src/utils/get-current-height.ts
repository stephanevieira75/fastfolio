import { sizesStyles } from "../styles";
import { FastfolioSizes } from "../types";

export const getCurrentHeight = (
  size: FastfolioSizes,
  type?: string
): string => {
  const heightMap = new Map<FastfolioSizes, string>();
  const componentType = type ? `${type}-` : "";

  heightMap.set("large", sizesStyles[`${componentType}height-lg`]);
  heightMap.set("medium", sizesStyles[`${componentType}height-md`]);
  heightMap.set("small", sizesStyles[`${componentType}height-sm`]);

  return heightMap.get(size) ?? "";
};
