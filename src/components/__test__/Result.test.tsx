import React from "react"
import {render, screen} from "@testing-library/react";
import Result from "../Result"

describe("test result component", () => {
    test("table is displayed", async () => {
        render(<Result/>)
        const cardElements = await screen.findAllByTestId(/card/i)
        expect(cardElements.length).toBe(14)
    })
})