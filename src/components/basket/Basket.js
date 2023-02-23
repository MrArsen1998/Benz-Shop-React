import React from 'react'
import './basket.css'

export default function Basket({ card }) {
  let totalAmount = 0;
  return (
    <div>
      {card.map(element => {
        totalAmount = totalAmount + element.price;
        return (
          <div key={element.id}>
            <div className='card-item'>
              <img src={element.image} alt=""/>
              <div className='card-item-info'>
                <h1>{element.title}</h1>
                <p>{element.price}$</p>
              </div>
            </div>
          </div>
        )
      })}
      <p className='total-amount'>Total amount {totalAmount}$</p>
    </div>
  )
}
