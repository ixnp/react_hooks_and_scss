import React, { useState } from 'react';
import FoodList from './FoodList'
import Filter from './Filter'
const App = () => {
const [items, setItems] = useState([])
console.log('items',items)
    return(
        <div>
            <Filter saveFilter={setItems} />
            <FoodList items={items} />
        </div> 
        
    )
}

export default App
