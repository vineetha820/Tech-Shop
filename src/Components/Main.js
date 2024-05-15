import {Link}  from "react-router-dom"
import { Swiper,SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { EffectCoverflow, Pagination, Autoplay, A11y ,Mousewheel} from 'swiper/modules';


import React, { useState } from 'react';
import productsData from './ProductDetails';
import Structure from './structure';
import FetauredProducts from "./FetauredProducts";
import HeroImageSlider from "./HeroImageSlider";
import Footer from "./Footer";


function Main() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <Swiper
            modules={[EffectCoverflow, Pagination, A11y,Autoplay]}
            loop={true}
            speed={400}
            mousewheel={true}
            spaceBetween={100}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 70,
                modifier: 3,
                slideShadows: false,
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 200
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 250
                },
            }}
            
            className="featured_swiper"
        >
    <div>
  {productsData.filter(item => item.tag === "hero-product").map((item, index) => (
    <SwiperSlide key={index}>
    <HeroImageSlider  item={item}/>
    </SwiperSlide>
  ))}
</div>
</Swiper>
    <div>
    <h1 style={{color:"white", textAlign:"center",margin:"20px"}}>Featured Products</h1>
    <Swiper
            modules={[EffectCoverflow, Pagination, A11y,Mousewheel]}
            loop={true}
            speed={400}
            mousewheel={true}
            spaceBetween={100}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 70,
                modifier: 3,
                slideShadows: false,
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 200
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 250
                },
            }}
            
            className="featured_swiper"
        >

    <div>
    {
      productsData
        .filter(item => item.tag === "featured-product")
        .map((item, index) => (
          <SwiperSlide key={index}>
          
            <FetauredProducts item={item} />
            </SwiperSlide>
        ))
    }
    
    </div>
       </Swiper>
    </div>
      <div className='categories'>
        <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryChange('All')}>All</button>
        <button className={selectedCategory === 'Headphones' ? 'active' : ''} onClick={() => handleCategoryChange('Headphones')}>Headphones</button>
        <button className={selectedCategory === 'Earbuds' ? 'active' : ''} onClick={() => handleCategoryChange('Earbuds')}>Earbuds</button>
        <button className={selectedCategory === 'Earphones' ? 'active' : ''} onClick={() => handleCategoryChange('Earphones')}>Earphones</button>
        <button className={selectedCategory === 'Neckbands' ? 'active' : ''} onClick={() => handleCategoryChange('Neckbands')}>Neckbands</button>
        {/* Add more buttons for other categories if needed */}
      </div>
      <div className='container1'>
        {productsData
          .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
          .map((item, index) => (
            <Structure key={index} item={item} />
          ))}
       <Link to="/product"> <h1>browse all products</h1></Link>
      </div>
      <Footer/>
      
     
    </>
  );
}

export default Main;



