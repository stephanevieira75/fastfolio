import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import {
  getCurrentBorderRadius,
  getCurrentHeight,
  getCurrentWidth
} from "../../utils";

import { Input } from "./input.component";

const inputPlaceholder = "This is an example placeholder";
const inputClassName = "input-class another-class";
const inputStyle = { backgroundColor: "red" };

const hasInputValue = jest.fn(
  (e: Document | Element | Window | Node, inputValue: string) =>
    screen.getByDisplayValue(inputValue) === e
);

const getInputByPlaceholder = jest.fn(() =>
  screen.getByPlaceholderText<HTMLInputElement>(inputPlaceholder)
);

afterEach(cleanup);

describe("Input component", () => {
  it("👀 should be rendered", () => {
    render(<Input placeholder={inputPlaceholder} />);
    expect(getInputByPlaceholder()).toBeDefined();
  });

  it("🔒 should be disabled", () => {
    render(<Input placeholder={inputPlaceholder} disabled />);

    expect(getInputByPlaceholder().disabled).toBeTruthy();
  });

  it("🔤 should render the correct text", () => {
    const onChange = jest.fn((_e) => {});

    render(<Input placeholder={inputPlaceholder} onChange={onChange} />);

    fireEvent.change(getInputByPlaceholder(), { target: { value: "123" } });

    expect(hasInputValue(getInputByPlaceholder(), "123")).toBe(true);
  });

  it("🔤 should render with className", () => {
    render(<Input placeholder={inputPlaceholder} className={inputClassName} />);

    expect(
      getInputByPlaceholder().className.includes(inputClassName)
    ).toBeTruthy();
  });

  it("📐 should be large size", () => {
    render(<Input placeholder={inputPlaceholder} size="large" />);

    expect(
      getInputByPlaceholder().className.includes(getCurrentHeight("large")) &&
        getInputByPlaceholder().className.includes(getCurrentWidth("large"))
    ).toBeTruthy();
  });

  it("📐 should be medium size", () => {
    render(<Input placeholder={inputPlaceholder} size="medium" />);

    expect(
      getInputByPlaceholder().className.includes(getCurrentHeight("medium")) &&
        getInputByPlaceholder().className.includes(getCurrentWidth("medium"))
    ).toBeTruthy();
  });

  it("📐 should be small size", () => {
    render(<Input placeholder={inputPlaceholder} size="small" />);

    expect(
      getInputByPlaceholder().className.includes(getCurrentHeight("small")) &&
        getInputByPlaceholder().className.includes(getCurrentWidth("small"))
    ).toBeTruthy();
  });

  it("🎨 should have borderRadius", () => {
    render(<Input placeholder={inputPlaceholder} borderRadius="large" />);

    expect(
      getInputByPlaceholder().classList.contains(
        getCurrentBorderRadius("large")
      )
    ).toBeTruthy();
  });

  it("🎨 should have custom style", () => {
    render(<Input placeholder={inputPlaceholder} style={inputStyle} />);

    expect(
      getInputByPlaceholder().style.backgroundColor ===
        inputStyle.backgroundColor
    ).toBeTruthy();
  });

  it("🎨 should be color of primary", () => {
    render(<Input placeholder={inputPlaceholder} color="primary" />);

    expect(getInputByPlaceholder().classList.contains("primary")).toBeTruthy();
  });

  it("🎨 should be color of secondary", () => {
    render(<Input placeholder={inputPlaceholder} color="secondary" />);

    expect(
      getInputByPlaceholder().classList.contains("secondary")
    ).toBeTruthy();
  });

  it("🎨 should be color of warning", () => {
    render(<Input placeholder={inputPlaceholder} color="warning" />);

    expect(getInputByPlaceholder().classList.contains("warning")).toBeTruthy();
  });

  it("🎨 should be color of error", () => {
    render(<Input placeholder={inputPlaceholder} color="error" />);

    expect(getInputByPlaceholder().classList.contains("error")).toBeTruthy();
  });

  it("🎨 should be color of success", () => {
    render(<Input placeholder={inputPlaceholder} color="success" />);

    expect(getInputByPlaceholder().classList.contains("success")).toBeTruthy();
  });

  it("🎨 should be color of dark", () => {
    render(<Input placeholder={inputPlaceholder} color="dark" />);

    expect(getInputByPlaceholder().classList.contains("dark")).toBeTruthy();
  });

  it("🎨 should be color of light", () => {
    render(<Input placeholder={inputPlaceholder} color="light" />);

    expect(getInputByPlaceholder().classList.contains("light")).toBeTruthy();
  });

  it("🎨 should be color of ghost", () => {
    render(<Input placeholder={inputPlaceholder} color="ghost" />);

    expect(getInputByPlaceholder().classList.contains("ghost")).toBeTruthy();
  });
});
