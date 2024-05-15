

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Updated icon
import "./Cart.css";
import { UserContext } from '../App';
import { Link } from 'react-router-dom';


function Cart() {
  const { cartItems, totalPrice, count, increment, decrement, removeItem,originalPrice,discount } = useContext(UserContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId); // Call the removeItem function from context
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className='cart'>
          <h1 className='cart-icon'><FontAwesomeIcon icon={faCartPlus} /></h1> 
          <h1>cart is empty</h1>
          <Link to="/product"><button>start shopping</button></Link> 
        </div>
      ) : (
        <div className='cart-Full'>
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className='cart-card'>
               <img src={item.images[0]} alt="images" width={"100%"}  />
                <div className='cart-details'>
                  <h3>{item.title}{item.info}</h3>
                  <p className='Fprice'>₹{item.finalPrice}  <span className='Oprice'><strike>₹{item.originalPrice}</strike></span></p>
                  <div className='quantity'>
                    <button onClick={() => decrement(item.id)}>-</button>
                    <button style={{color:"red",backgroundColor:"black"}}>{item.quantity}</button>
                    <button onClick={() => increment(item.id)}>+</button>

                  </div>
                </div>
                <button onClick={() => handleRemoveItem(item.id)} className='remove_icon'><FontAwesomeIcon icon={faTrashAlt}  /></button> 
                </div>
                
            ))}
          </div>
          <div className='summery'>
            <h3 >order summery  ({count} item)</h3>
            <div className='cart-summery'>
              <div>
                <p>original price</p>
                <p>discount</p>
                <p>delivery</p>
              </div>
              <div style={{fontWeight:"bold"}}>
                <p>₹{originalPrice}</p>
                <div className='colorchange'>
                <p>₹{discount}</p>
                <p>Free</p>
                </div>
              </div>
            </div>
            <hr/>
            <div  className='totalPrice'>
            <p>total price</p>
            <p>₹{totalPrice}</p>
            </div>
            <button className='checkout'>checkout</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

