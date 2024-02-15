import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import CurrentIp from "./current-ip"
import { ipFrontend } from "../mock/ip"

describe("CurrentIp Component", () => {
  it("verifica ip", () => {
    render(<CurrentIp {...ipFrontend} />)
    expect(screen.getByText(/Your IP:/i)).toBeInTheDocument()

    expect(document.querySelector("#data-ip")).toHaveTextContent("127.0.0.1")
  })
})
