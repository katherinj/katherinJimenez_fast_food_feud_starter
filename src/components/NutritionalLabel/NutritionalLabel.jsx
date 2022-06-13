import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item}</h4>

      <ul className="fact-list">{nutritionFacts.map(nf => <NutritionalLabelFact fact={nf.label} key={nf.id} item={props.item}/>)}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.fact}</span>{" "}
      <span className="fact-value">{props.fact.attribute}</span>
    </li>
  )
}

export default NutritionalLabel
