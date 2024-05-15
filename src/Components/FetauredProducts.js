import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from "../App";


// Import Swiper styles
import 'swiper/css';

function FetauredProducts({item}) {
  const{changeHeroImage}=useContext(UserContext)
    const{title, id,   images,finalPrice,originalPrice}=item
     
 
  return (
    

    <div className='featured-produts '>
      <h3 >{title}</h3>
    <Link to={`/ProductInfo/${id}`}>  <img src={images[0]} alt={title} onClick={()=>{ changeHeroImage(images[0])}}/></Link>
      <p >{finalPrice}  <strike>{originalPrice}</strike></p>
    </div>
   

  )
}

export default FetauredProducts
