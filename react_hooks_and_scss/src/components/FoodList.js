import React, {useState, useEffect} from 'react';

const fooddata = [[{
    "title": "cake",
    "url": "",
    "keys": ["sweet", "cake", "desert"]
}
],
[{
    "title": "cookie",
    "url": "",
    "keys": ["sweet", "cookie", "desert", "snack"]
}],
[{
    "title": "ramen",
    "url": "",
    "keys": ["savory", "ramen", "entree", "noodles"]
}],
[{
    "title": "pasta",
    "url": "",
    "keys": ["savory", "pasta", "entree", "noodles"]
}]
]
const FoodList = ({items}) => {
    const [food, setfood] = useState(fooddata);
//  useEffect(() => {
//      setfood(fooddata);
//  })
console.log('foodlist', items)
    return (
        
        <ul>
        {food.map(item => {
         return <li key={item[0].title}>{item[0].title}</li>
        })}

        </ul>
     
    )
}
export default FoodList
