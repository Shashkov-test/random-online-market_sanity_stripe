import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '@/context/StateContext';


const NavBar = () => {

  const {showCart, setShowCart, totalQuantities} = useStateContext(0);

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          Random Market
        </Link>
      </p>

      <button onClick={() => setShowCart(true)} type='button' className='cart-icon'>
        <AiOutlineShopping />
        <span className="cart-item-qty">
          {totalQuantities}
        </span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default NavBar