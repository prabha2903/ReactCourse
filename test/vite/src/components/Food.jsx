import React from 'react'

function Food() {
    let foods = ['Biriyani','Chapathi','Rice']
  return (
    <>
    <ul>
    {foods.map((foods)=>(
    <li>{foods}</li>
))}
  </ul>
    </>
  )
}

export default Food