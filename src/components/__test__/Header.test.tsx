import React from "react"
import {render, screen} from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    beforeEach(() => {
        render(<Header />)
    })
    test("test helsinki", () => {
        const helsinkiElement = screen.getByText(/Helsinki/i);

        expect(helsinkiElement).toBeInTheDocument()
    })
    test("test add guest displayed", () => {
        const addGuestText = screen.getByText(/Add guests/i);

        expect(addGuestText).toBeInTheDocument()
    })
    test("test logo img displayed", () => {
        const logoElement = screen.getByTestId("logo")

        expect(logoElement).toBeInTheDocument()
    })
    test("test search icon displayed", () => {
        const searchIconElement = screen.getByTestId("search-icon")

        expect(searchIconElement).toBeInTheDocument()
    })
})