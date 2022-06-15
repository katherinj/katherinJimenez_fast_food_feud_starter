import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE

export function RestaurantsRow(props) {
  const [currentCategory, setCurrentCategory] = useState(null)
   
  return (
    <div className="RestaurantsRow">
        <h2 className="title">Restaurants</h2>
        <div className="restaurants options">
        
        {restaurants.map((restaurant, idx) => (
        <Chip label={restaurant} key={idx} isActive={currentRestaurant == restaurant} onChipClick={() => setCurrentRestaurant(restaurant)} onChipCloseClick={(e) =>{e.stopPropagation(); setCurrentRestaurant("")}}/>
        ))}
        
        </div>
    </div>
    )
  }
  
export default RestaurantsRow
  