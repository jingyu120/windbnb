import React from "react"
import {render, screen} from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    beforeAll(() => {
        render(<Header />)
    })
    test("test helsinki", () => {
        const helsinkiElement = screen.getByText(/Helsinki/i);

        expect(helsinkiElement).toBeInTheDocument()
    })
})