import preview from 'jest-preview';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../App";

describe("App", () => {
  it("should work as expected", async () => {
    render(<App />);

    await userEvent.click(screen.getByTestId('increase'));
    await userEvent.click(screen.getByTestId('increase'));
    preview.debug();

    expect(screen.getByTestId('increase')).toHaveTextContent('2');
  });
});
