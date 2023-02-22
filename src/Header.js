import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Benz Shop</span>
            <ul className='nav'>
                <li> 
                  <Link to ="/aboutus">About Us</Link>
                </li>
                <li> 
                  <Link to ="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
