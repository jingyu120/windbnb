import React from "react"
import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    test("elements are displayed", () => {
        render(<Header />)
        const helsinkiElement = screen.getByText(/Helsinki/i);
        expect(helsinkiElement).toBeInTheDocument()
        const addGuestText = screen.getByText(/Add guests/i);
        expect(addGuestText).toBeInTheDocument()
        const logoElement = screen.getByTestId("logo")
        expect(logoElement).toBeInTheDocument()
        const searchIconElement = screen.getByTestId("search-icon")
        expect(searchIconElement).toBeInTheDocument()
    })
    test("modal display", () => {
        render(<Header />)
        const searchElement = screen.getByTestId("search-field")
        let modalElement = screen.queryByTestId("modal")
        expect(modalElement).toBe(null)
        fireEvent.click(searchElement)
        modalElement = screen.queryByTestId("modal")
        expect(modalElement).toBeInTheDocument()

    })
})