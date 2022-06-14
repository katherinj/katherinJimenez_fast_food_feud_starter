import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive, onChipClick, onChipCloseClick}) {
  let buttonClassName = isActive ? "chip active" : "chip";

  return (
    <button className={buttonClassName} onClick={onChipClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onChipCloseClick}>{`X`} </span>
    </button>
  )
}

export default Chip
