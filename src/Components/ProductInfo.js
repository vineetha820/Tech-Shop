import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import reviewsData from './reviewData';
import productsData from './ProductDetails';
import Structure from './structure';
import { useParams } from 'react-router-dom';
import { Swiper,SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination,  A11y ,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function ProductInfo() {
  
  const{id}=useParams()
  
  const product=productsData.find((product)=>product.id===parseInt(id))
  console.log(product)
  const [activeSection, setActiveSection] = useState('specification');
  const { heroImage,changeHeroImage } = useContext(UserContext);
  
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  useEffect(() => {
    // Ensure heroImage is always initialized with the first image of the product
    if (!heroImage && product.images.length > 0) {
      changeHeroImage(product.images[0]);
    }
  }, [heroImage, product.images, changeHeroImage]);
  


  
  const spanElements = [];
      for (let i = 0; i < product.rateCount; i++) {
        spanElements.push(
          <span key={i} className='star'>
            <FontAwesomeIcon icon={faStar} />
          </span>
        );
      }

 

  return (
    <>
      <div className='product_info'>
        <div className='related-images-container'>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              className={heroImage === image ? 'related-images active' : 'related-images'}
              onClick={() => changeHeroImage(image)}
            />
          ))}
        </div>
        <div>
          <img src={heroImage} alt={product.title} className='hero-image' />
        </div>
      
      <div>
        <h1 className='product-title'>{product.title}</h1>
        <h3 className='product-info'>{product.info}</h3>
        <div>
          {spanElements} <span className='ratings'>|{product.ratings} Ratings</span> 
        </div>
        <hr />
        <div className='product-info-prices'>
          <div>
            <p className='Fprice'>₹{product.finalPrice} <span className='Oprice'><strike>₹{product.originalPrice}</strike></span></p>
            <p className='saving'>you save {product.originalPrice - product.finalPrice}</p>
            <p  className='tax'>(inclusive of all taxes)</p>
          </div>
          <div>
            <button>In stock</button>
          </div>
        </div>
        <hr />
        <h4>Offers and Discounts</h4>
        <button>No Cost EMI on Credit Card</button>
        <button>Pasy latter & Avail Cashback</button>
        <hr />
      </div>
    </div>
    <div className='section-buttons'>
        <button id='specificationBtn' className={activeSection === 'specification' ? 'active' : ''} onClick={() => handleButtonClick('specification')}>
          Specification
        </button>
        <button
          id='overviewBtn' className={activeSection === 'overview' ? 'active' : ''} onClick={() => handleButtonClick('overview')} >
          Overview
        </button>
        <button id='reviewBtn' className={activeSection === 'review' ? 'active' : ''} onClick={() => handleButtonClick('review')}>
          Review
        </button>
      </div>
      {activeSection === 'specification' && (
        <div  className='specification'>
        <div>
          <p>Brand</p>
          <p>Model</p>
          <p>Generic Name</p>
          <p>Headphone Type</p>
          <p>Connectivity</p>
          <p>Microphone</p>
          </div>
          <div>
          <p>{product.brand}</p>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>{product.type}</p>
          <p>{product.connectivity}</p>
          <p>yes</p>
          </div>
          </div>
        

      )}
      {activeSection === 'overview' && (
        <div className='overview'>
        <h2>The boAt Rockerz 518 On-Ear Wireless Headphones provides with fabulous sound quality</h2>
        <ul className='overview-data'>
          <li>Sound Tuned to Perfection</li>
          <li>Comfortable to Wear</li>
          <li>Long Hours Playback Time</li>
          </ul>
          <p>Buy the boAt Rockerz 518 On-Ear Wireless headphones which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on form.Enjoy perfect flexibility and mobility with amazing musical quality with these Headphones giving you a truly awesome audio experience.It blends with exceptional sound quality and a rangeof smart feautures for an unrivalled listening experience.</p>
       
        
      </div>

      )}
      {activeSection === 'review' && (
        <div>
          {
             reviewsData.map((item)=>(
              <>
              <div className='reviews'>
              <div>
              <FontAwesomeIcon icon={faUser}  className='user-icon'/>
              </div>
              <div>
              <h4 className='user-name'>{item.name}</h4>
              {[...Array(item.rateCount)].map((_, index) => (
                <span key={index} className="star">
                  <FontAwesomeIcon icon={faStar} />
                </span>
              ))}
              <span style={{color:"white"}}>|{item.date}</span>
              </div>
              </div>
              <p className='item-review'>{item.review}</p>
              </>
             ))
          }
        </div>
      )}

      <div>
      <h1 style={{color:"white", textAlign:"center",marginBottom:"20px"}}> related products</h1>
      <Swiper
      modules={[EffectCoverflow, Pagination, A11y,Mousewheel]}
      loop={true}
      speed={400}
      mousewheel={true}
      spaceBetween={10}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 70,
        modifier: 3,
        slideShadows: false,
    }}
      breakpoints={{
        768: {
            slidesPerView: 2,
            spaceBetween: 200
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10
        },
    }}
      centeredSlides={false}
     
     
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {productsData
  .filter((item) => item.category === product.category)
  .map((item, index) => (
    <SwiperSlide key={index}>
    <div>
   
    <Structure key={index} item={item} changeHeroImage={changeHeroImage}/>
    </div>
    </SwiperSlide>
  
    
  ))
      }
      </Swiper>
      
      </div>
    </>
  );
}

export default ProductInfo;
