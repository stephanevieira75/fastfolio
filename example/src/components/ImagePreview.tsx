import React from "react";

import { Image } from "fastfolio";

type Props = {
  width: React.ImgHTMLAttributes<HTMLImageElement>["width"];
  height: React.ImgHTMLAttributes<HTMLImageElement>["height"];
};

export const ImagePreview = ({ width, height }: Props) => {
  return (
    <div style={{ background: "#262626" }}>
      <h1 style={{ color: "#fafafa", margin: 0, paddingBottom: 24 }}>
        Images {width}px/{height}px
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
      >
        <Image
          borderRadius="small"
          src="error-path-example"
          width={width}
          height={height}
        />

        <Image
          borderRadius="small"
          src={`https://picsum.photos/${width}/${height}`}
          width={width}
          height={height}
        />

        <Image
          borderRadius="medium"
          src={`https://picsum.photos/${width}/${height}`}
          width={width}
          height={height}
        />

        <Image
          borderRadius="large"
          src={`https://picsum.photos/${width}/${height}`}
          width={width}
          height={height}
        />

        <Image
          borderRadius="small"
          src={`https://picsum.photos/${width}/${height}`}
          width={width}
          height={height}
          circle
        />
      </div>

      <div style={{ padding: 16 }} />
    </div>
  );
};
