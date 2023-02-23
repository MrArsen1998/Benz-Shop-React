import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'><Link to ="/">Benz Shop</Link></span>
            <ul className='nav'>
                <li> 
                  <Link to ="/aboutus">About Us</Link>
                </li>
                <li> 
                  <Link to ="/contact">Contact</Link>
                </li>
                <Link to ="/Basket"><img className='card-logo' src='./img/card-logo.png' alt=''/></Link>
            </ul>
        </div>
    </header>
  )
}
