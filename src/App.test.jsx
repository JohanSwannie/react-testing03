import { render, screen } from "@testing-library/react";
import App from "./App";

// Test 1

test("Button starts with the correct color before the click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

// Test 2

test("Button starts with the correct text before the click", () => {});

// Test 3

test("Button starts with the correct color after the click", () => {});

// Test 4

test("Button starts with the correct text after the click", () => {});
