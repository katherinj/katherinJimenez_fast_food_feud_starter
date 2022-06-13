import * as React from "react"
import "./Header.css"

export function Header({header}) {
  return (
    <header className="header">
      <h1 className="title">{header.title}</h1>
      <h4 className="tagline">{header.tagline}</h4>
      <p className="description">{header.description}</p>
    </header>
  )
}

export default Header
