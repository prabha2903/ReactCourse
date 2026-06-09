import React from 'react'
import Fruit from './Fruit'
function Fruits() {
    let fruits = [
        {name:"Apple",price:110},
        {name:"Mango",price:60},
        {name:"Orange",price:120}
    ]
  return (
    <div>
        <ul>
        {fruits.map((fruit)=>(
            <Fruit key={fruit.name}name={fruit.name}price={fruit.price} />
        ))}
        </ul>
    </div>
  )
}

export default Fruits