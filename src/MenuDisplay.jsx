import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel.jsx"

export function MenuDisplay(props) {
   
  return (
    <div className="MenuDisplay display">
    <div className="MenuItemButtons menu-items">
      <h2 className="title">Menu Items</h2>
      
      {currentMenuItems.map((item,idx) => (
      <Chip label={item.item_name} key={idx} isActive={item == currentItem} onChipClick={() => setCurrentItem(item)} onChipCloseClick={(e) =>{e.stopPropagation();setCurrentItem("")}}/> ))}

    </div>
        <div className="NutritionFacts nutrition-facts"> {
            currentItem ? <NutritionalLabel item={currentItem} key={currentItem.item_name}/>:null 

        }</div>

    </div>
    )
  }
  
export default MenuDisplay
  