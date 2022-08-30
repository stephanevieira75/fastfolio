import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import { Image } from "./image.component";

const imageClassName = "image-class another-class";
const imageAltText = "This is a cool image";
const imageSrcError = "./statics/images/image-that-doesnt-exist.png";
const imageSrc = "./statics/images/image-no-preview.png";
const imageStyle = { backgroundColor: "red" };

const getImageByAltText = jest.fn(() =>
  screen.getByAltText<HTMLImageElement>(imageAltText)
);

afterEach(cleanup);

describe("Image component", () => {
  it("👀 should be rendered", () => {
    render(<Image alt={imageAltText} />);
    expect(getImageByAltText()).toBeDefined();
  });

  it("ℹ️ should contain src", () => {
    render(<Image alt={imageAltText} src={imageSrc} />);
    expect(
      getImageByAltText().src.includes(imageSrc.split("./")[0])
    ).toBeTruthy();
  });

  it("⚠️ should contain fallback", () => {
    render(
      <Image alt={imageAltText} src={imageSrcError} fallback={imageSrc} />
    );

    expect(
      getImageByAltText().src.includes(imageSrc.split("./")[0])
    ).toBeTruthy();
  });

  it("🎨 should have custom className", () => {
    render(
      <Image alt={imageAltText} src={imageSrc} className={imageClassName} />
    );

    expect(getImageByAltText().className.includes(imageClassName)).toBeTruthy();
  });

  it("🎨 should have custom style", () => {
    render(<Image alt={imageAltText} src={imageSrc} style={imageStyle} />);

    expect(getImageByAltText().style.backgroundColor).toBe(
      imageStyle.backgroundColor
    );
  });

  it("🎨 should be rounded", () => {
    render(<Image alt={imageAltText} src={imageSrc} circle />);

    expect(getImageByAltText().classList.contains("circle")).toBeTruthy();
  });
});
