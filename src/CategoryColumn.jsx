import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import Chip from "./components/Chip/Chip.jsx"
import { useState } from "react"


export function CategoryColumn(props) {
  const [currentCategory, setCurrentCategory] = useState(null)

    return (
    <div className="CategoriesColumn col">
      <div className="categories options">
        <h2 className="title">Categories</h2>
        
        {props.categories.map((category, idx) => (
          <Chip label={category} key={idx} isActive={category == currentCategory} onChipClick={() => setCurrentCategory(category)} onChipCloseClick={(e) =>{e.stopPropagation(); setCurrentCategory("")}}/>
        ))}
      
      </div>
    </div>
    )
  }
  
  export default CategoryColumn
  