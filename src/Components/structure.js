import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Structure.css"
import { UserContext } from '../App';
import {Link} from "react-router-dom"


function Structure({item}) {
  
  const handleImageClick = () => {
    changeHeroImage(images[0]); // Assuming your related product item has an 'image' property
  };
  const {addToCart,changeHeroImage}=useContext(UserContext)
const{id,title,images,info,finalPrice,originalPrice,rateCount}=item
  const spanElements = [];

 

  // Using a for loop to iterate over the rateCount
  for (let i = 0; i < rateCount; i++) {
    spanElements.push(<span key={i} className='star'><FontAwesomeIcon icon={faStar} /></span>);
  }
  
  return (
    <div className='container' onClick={handleImageClick}>
   
    <div >
    <div className="image-container">
    <Link to={`/ProductInfo/${id}`}> <img src={images[0]} alt="img" /></Link>
    </div>
      <div>
        {spanElements} 
      </div>
      <h1 className='title' title={title}>{title}</h1>
      <p className='info'>{info}</p>
      <hr/>
      <p className='Fprice'>₹{finalPrice}  <span className='Oprice'><strike>₹{originalPrice}</strike></span></p>
      <button onClick={()=>addToCart(item)}>Add To Cart</button>
    </div>
    
    </div>
  );
}

export default Structure;
