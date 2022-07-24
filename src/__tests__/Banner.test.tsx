import preview from 'jest-preview';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Banner from "../components/Banner";

describe("Banner", () => {
  it("should work as expected", async () => {
    render(<Banner title={'Hello'} />);

    preview.debug();
  });
});
