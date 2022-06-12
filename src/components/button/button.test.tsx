import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import {
  getCurrentBorderRadius,
  getCurrentHeight,
  getCurrentWidth
} from "../../utils";

import { Button } from "./button.component";

const btnText = "Hello";
const btnClassName = "btn-class another-class";
const btnStyle = { backgroundColor: "red" };

const getBtnByRole = jest.fn(() =>
  screen.getByRole<HTMLButtonElement>("button", {
    name: btnText
  })
);

afterEach(cleanup);

describe("Button component", () => {
  it("👀 should be rendered", () => {
    render(<Button>{btnText}</Button>);
    expect(getBtnByRole()).toBeDefined();
  });

  it("🖱 should be clickable", () => {
    const onClick = jest.fn((_e) => {});
    render(<Button onClick={onClick}>{btnText}</Button>);

    getBtnByRole().click();
    expect(onClick).toHaveBeenCalled();
  });

  it("🔒 should be disabled", () => {
    render(<Button disabled>{btnText}</Button>);

    expect(getBtnByRole().disabled).toBeTruthy();
  });

  it("🔤 should render with className", () => {
    render(<Button className={btnClassName}>{btnText}</Button>);

    expect(getBtnByRole().className.includes(btnClassName)).toBeTruthy();
  });

  it("🔤 should render the correct text", () => {
    render(<Button>{btnText}</Button>);

    expect(getBtnByRole()).toBeDefined();
  });

  it("📐 should be large size", () => {
    render(<Button size="large">{btnText}</Button>);

    expect(
      getBtnByRole().className.includes(getCurrentHeight("large")) &&
        getBtnByRole().className.includes(getCurrentWidth("large"))
    ).toBeTruthy();
  });

  it("📐 should be medium size", () => {
    render(<Button size="medium">{btnText}</Button>);

    expect(
      getBtnByRole().className.includes(getCurrentHeight("medium")) &&
        getBtnByRole().className.includes(getCurrentWidth("medium"))
    ).toBeTruthy();
  });

  it("📐 should be small size", () => {
    render(<Button size="small">{btnText}</Button>);

    expect(
      getBtnByRole().className.includes(getCurrentHeight("small")) &&
        getBtnByRole().className.includes(getCurrentWidth("small"))
    ).toBeTruthy();
  });

  it("🎨 should have borderRadius", () => {
    render(
      <Button color="secondary" borderRadius="large">
        {btnText}
      </Button>
    );

    expect(
      getBtnByRole().classList.contains(getCurrentBorderRadius("large"))
    ).toBeTruthy();
  });

  it("🎨 should have custom style", () => {
    render(
      <Button color="secondary" style={btnStyle}>
        {btnText}
      </Button>
    );

    expect(
      getBtnByRole().style.backgroundColor === btnStyle.backgroundColor
    ).toBeTruthy();
  });

  it("🎨 should be color of primary", () => {
    render(<Button color="primary">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("primary")).toBeTruthy();
  });

  it("🎨 should be color of secondary", () => {
    render(<Button color="secondary">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("secondary")).toBeTruthy();
  });

  it("🎨 should be color of warning", () => {
    render(<Button color="warning">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("warning")).toBeTruthy();
  });

  it("🎨 should be color of error", () => {
    render(<Button color="error">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("error")).toBeTruthy();
  });

  it("🎨 should be color of success", () => {
    render(<Button color="success">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("success")).toBeTruthy();
  });

  it("🎨 should be color of dark", () => {
    render(<Button color="dark">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("dark")).toBeTruthy();
  });

  it("🎨 should be color of light", () => {
    render(<Button color="light">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("light")).toBeTruthy();
  });

  it("🎨 should be color of ghost", () => {
    render(<Button color="ghost">{btnText}</Button>);

    expect(getBtnByRole().classList.contains("ghost")).toBeTruthy();
  });
});
