import React, { useEffect } from "react";

export function useCurrentSrc(src?: string, fallback?: string) {
  const [currentSrc, _setCurrentSrc] = React.useState<string>(src ?? "");

  const setCurrentSrc = (src?: string, fallback?: string) => {
    const image = new Image();
    image.src = src ?? "";

    image.onload = () => _setCurrentSrc(image.src);

    image.onerror = () => (image.src = fallback ?? "");
  };

  useEffect(() => {
    setCurrentSrc(src, fallback);
  }, [src, fallback]);

  return currentSrc;
}
