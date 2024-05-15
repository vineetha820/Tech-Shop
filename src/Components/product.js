// import React from 'react'

// import productsData from './ProductDetails'

// function Product() {
  
//   return (
//     <div className='product-page'>
//     <div className='Features'>
//     <h3>Sort By</h3>
//     <hr/>
//     <p>Latest</p>
//     <p>Featured</p>
//     <p>Top Rated</p>
//     <p>Price(Lowest First)</p>
//     <p>Price(Highest First)</p>
//     <h3>Filter By</h3>
//     <hr/>
//     <h3>brands</h3>
//     <form>
//     <input type='checkbox'/>
//     <label>JBL</label><br/>
//     <input type='checkbox'/>
//     <label>BoAt</label><br/>
//     <input type='checkbox'/>
//     <label>Sony</label>
//     <h3>Category</h3>
//     <input type='checkbox'/>
//     <label>Headphones</label><br/>
//     <input type='checkbox'/>
//     <label>Earbuds</label><br/>
//     <input type='checkbox'/>
//     <label>Earphones</label><br/>
//     <input type='checkbox'/>
//     <label>Neckbands</label>
//     \<h3>price</h3>
//     <input type="range" min={0} max={100}/>
//     </form>
//     </div>
//     <div className='container1'>
//     {productsData
      
//       .map((item, index) => (
//         <Structure key={index} item={item} />
//       ))}

//   </div>
//     </div>
//   )
// }

// export default Product
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import Structure from './structure'
import productsData from "./ProductDetails";



function Product() {
    const [filter, setFilter] = useState(null);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [rangeValue, setRangeValue] = useState(0);
    const [isFilterActive, setIsFilterActive] = useState(false); // State to track if any filter is active

    // Function to apply filters to product data
    const filterProducts = () => {
        let filteredData = productsData;

        if (filter === 'top-rated') {
            filteredData = filteredData.filter(item => item.rateCount === 5);
        } else if (filter === 'price-lowest-first') {
            filteredData = filteredData.slice().sort((a, b) => a.finalPrice - b.finalPrice);
        } else if (filter === 'price-highest-first') {
            filteredData = filteredData.slice().sort((a, b) => b.finalPrice - a.finalPrice);
        }
        else if (filter === 'featured') {
            filteredData = filteredData.filter(item => item.tag === "featured-product");
        }


        if (selectedBrands.length > 0) {
            filteredData = filteredData.filter(item => selectedBrands.includes(item.brand));
        }

        if (selectedCategories.length > 0) {
            filteredData = filteredData.filter(item => selectedCategories.includes(item.category));
        }

        if (rangeValue > 0) {
            filteredData = filteredData.filter(item => item.finalPrice <= rangeValue * 100);
        }

        return filteredData;
    };

    // Function to handle brand filter change
    const handleBrandChange = (brand) => {
        setSelectedBrands(prevBrands => {
            const updatedBrands = prevBrands.includes(brand) ?
                prevBrands.filter(item => item !== brand) :
                [...prevBrands, brand];
            setIsFilterActive(updatedBrands.length > 0 || selectedCategories.length > 0 || rangeValue > 0);
            return updatedBrands;
        });
    };

    // Function to handle category filter change
    const handleCategoryChange = (category) => {
        setSelectedCategories(prevCategories => {
            const updatedCategories = prevCategories.includes(category) ?
                prevCategories.filter(item => item !== category) :
                [...prevCategories, category];
            setIsFilterActive(selectedBrands.length > 0 || updatedCategories.length > 0 || rangeValue > 0);
            return updatedCategories;
        });
    };
    const handleRangeChange = (e) => {
        const newValue = parseInt(e.target.value);
        setRangeValue(newValue);
        setIsFilterActive(selectedBrands.length > 0 || selectedCategories.length > 0 || newValue > 0);
    };
    const clearAllFilters = () => {
      setSelectedBrands([]);
      setSelectedCategories([]);
      setRangeValue(0);
      setFilter(null);
      setIsFilterActive(false);
  };


   

    return (
        <>
        <div className="product-page">
            <div className="Features">
            {isFilterActive && <button onClick={clearAllFilters} className="clear-all-btn">Clear All</button>}


                <h3>Sort By</h3>
                <hr />
                <p onClick={() => {setFilter('latest'); setIsFilterActive(true);}}>Latest</p>
                <p onClick={() => {setFilter('featured'); setIsFilterActive(true);}}>Featured</p>
                <p onClick={() => {setFilter('top-rated'); setIsFilterActive(true);}}>Top Rated</p>
                <p onClick={() => {setFilter('price-lowest-first'); setIsFilterActive(true);}}>Price (Lowest First)</p>
                <p onClick={() => {setFilter('price-highest-first'); setIsFilterActive(true);}}>Price (Highest First)</p>

                <h3>Filter By</h3>
                <hr />
                <h3>Brands</h3>
                <form>
                    <input type="checkbox" className="checkbox" onChange={() => handleBrandChange('JBL')} checked={selectedBrands.includes('JBL')} />
                    <label >JBL</label><br />
                    <input type="checkbox" className="checkbox" onChange={() => handleBrandChange('boAt')} checked={selectedBrands.includes('boAt')} />
                    <label>boAt</label><br />
                    <input type="checkbox" className="checkbox" onChange={() => handleBrandChange('Sony')} checked={selectedBrands.includes('Sony')} />
                    <label>Sony</label>
                </form>

                <h3>Category</h3>
                <form>
                    <input type="checkbox" className="checkbox" onChange={() => handleCategoryChange('Headphones')} checked={selectedCategories.includes('Headphones')} />
                    <label>Headphones</label><br />
                    <input type="checkbox" className="checkbox" onChange={() => handleCategoryChange('Earbuds')} checked={selectedCategories.includes('Earbuds')} />
                    <label>Earbuds</label><br />
                    <input type="checkbox" className="checkbox" onChange={() => handleCategoryChange('Earphones')} checked={selectedCategories.includes('Earphones')} />
                    <label>Earphones</label><br />
                    <input type="checkbox" className="checkbox" onChange={() => handleCategoryChange('Neckbands')} checked={selectedCategories.includes('Neckbands')} />
                    <label>Neckbands</label>
                </form>

                <h3>Price</h3>
                <p><FontAwesomeIcon className="rupee" icon={faIndianRupeeSign} />{rangeValue * 100}</p>
                <input type="range" min={0} max={90} id="range" value={rangeValue} onChange={handleRangeChange} />
            </div>
           
            <div className='container1'>
                {filterProducts().map((item, index) => (
                    <Structure key={index} item={item} />
                ))}
            </div>
        

        </div>
         
         </>
    );
}

export default Product;
