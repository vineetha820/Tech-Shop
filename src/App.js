
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import TechShop from './Components/TechShop';
import Cart from './Components/Cart';
import Product from './Components/product';
import ProductInfo from './Components/ProductInfo';


export const UserContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const[originalPrice, setOriginalPrice]=useState(0)
  const[discount,setDiscount]=useState(0)
  
  const [heroImage, setHeroImage] = useState(null);


  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) { 
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity++;
      setCartItems(updatedItems);
    } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
            setCount(prevCount => prevCount + 1);
    }
    
    setTotalPrice(prevTotalPrice => prevTotalPrice + item.finalPrice);
    setOriginalPrice(prev=>prev+item.originalPrice)
    setDiscount(prev=>prev+(item.originalPrice-item.finalPrice))
  };

 

 
  const increment = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        let newQuantity = item.quantity + 1;
        if (newQuantity > 5) {
          newQuantity = 5;
        }
  
        const updatedItem = { ...item, quantity: newQuantity };
        const totalPriceDiff = (newQuantity - item.quantity) * parseFloat(updatedItem.finalPrice);
        const discountPricediff = (newQuantity - item.quantity) * parseFloat((item.originalPrice)-(updatedItem.finalPrice));
        const originalPricediff=(newQuantity-item.quantity)*parseFloat(updatedItem.originalPrice)
        setTotalPrice(totalPrice => totalPrice + totalPriceDiff);
        setOriginalPrice(prev=>prev+originalPricediff)
        setDiscount(prev=>prev+discountPricediff)

        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  

  
  
  const decrement = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        let newQuantity = item.quantity - 1;
        if (newQuantity < 1) {
          newQuantity = 1;
        }
  
        const updatedItem = { ...item, quantity: newQuantity };
        const discountPricediff = (newQuantity - item.quantity) * parseFloat((item.originalPrice)-(updatedItem.finalPrice));
        const originalPricediff=(newQuantity-item.quantity)*parseFloat(updatedItem.originalPrice)
        const totalPriceDiff = (newQuantity - item.quantity) * parseFloat(updatedItem.finalPrice);
        setTotalPrice(totalPrice => totalPrice + totalPriceDiff);
        setOriginalPrice(prev=>prev+originalPricediff)
        setDiscount(prev=>prev+discountPricediff)
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeItem = (itemId) => {
    const removedItem = cartItems.find(item => item.id === itemId);
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    setCount(prevCount => prevCount - 1);
    setTotalPrice(prevTotalPrice => prevTotalPrice - (removedItem.finalPrice * removedItem.quantity));
  };
  const changeHeroImage = (image) => {
    setHeroImage(image);
  };

  return (
    <UserContext.Provider value={{ cartItems, addToCart, totalPrice, count, increment, decrement, removeItem,originalPrice,discount,heroImage,changeHeroImage }}>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path='/' element={<TechShop />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;



// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar';
// import TechShop from './Components/TechShop';
// import Cart from './Components/Cart';
// import Product from './Components/product';
// import ProductInfo from './Components/ProductInfo';


// export const UserContext = React.createContext();

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [count, setCount] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const[originalPrice, setOriginalPrice]=useState(0)
//   const[discount,setDiscount]=useState(0)
//   const[product,setproduct]=useState()
//   const [heroImage, setHeroImage] = useState(product?.images[0] || null);


//   const addToCart = (item) => {
//     const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
//     if (existingItemIndex !== -1) { 
//       const updatedItems = [...cartItems];
//       updatedItems[existingItemIndex].quantity++;
//       setCartItems(updatedItems);
//     } else {
//             setCartItems([...cartItems, { ...item, quantity: 1 }]);
//             setCount(prevCount => prevCount + 1);
//     }
    
//     setTotalPrice(prevTotalPrice => prevTotalPrice + item.finalPrice);
//     setOriginalPrice(prev=>prev+item.originalPrice)
//     setDiscount(prev=>prev+(item.originalPrice-item.finalPrice))
//   };

//   const productDetails=(item)=>{
//     setproduct(item)
//   }
  

 
//   const increment = (itemId) => {
//     const updatedCartItems = cartItems.map(item => {
//       if (item.id === itemId) {
//         let newQuantity = item.quantity + 1;
//         if (newQuantity > 5) {
//           newQuantity = 5;
//         }
  
//         const updatedItem = { ...item, quantity: newQuantity };
//         const totalPriceDiff = (newQuantity - item.quantity) * parseFloat(updatedItem.finalPrice);
//         const discountPricediff = (newQuantity - item.quantity) * parseFloat((item.originalPrice)-(updatedItem.finalPrice));
//         const originalPricediff=(newQuantity-item.quantity)*parseFloat(updatedItem.originalPrice)
//         setTotalPrice(totalPrice => totalPrice + totalPriceDiff);
//         setOriginalPrice(prev=>prev+originalPricediff)
//         setDiscount(prev=>prev+discountPricediff)

//         return updatedItem;
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };
  

  
  
//   const decrement = (itemId) => {
//     const updatedCartItems = cartItems.map(item => {
//       if (item.id === itemId) {
//         let newQuantity = item.quantity - 1;
//         if (newQuantity < 1) {
//           newQuantity = 1;
//         }
  
//         const updatedItem = { ...item, quantity: newQuantity };
//         const discountPricediff = (newQuantity - item.quantity) * parseFloat((item.originalPrice)-(updatedItem.finalPrice));
//         const originalPricediff=(newQuantity-item.quantity)*parseFloat(updatedItem.originalPrice)
//         const totalPriceDiff = (newQuantity - item.quantity) * parseFloat(updatedItem.finalPrice);
//         setTotalPrice(totalPrice => totalPrice + totalPriceDiff);
//         setOriginalPrice(prev=>prev+originalPricediff)
//         setDiscount(prev=>prev+discountPricediff)
//         return updatedItem;
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };

//   const removeItem = (itemId) => {
//     const removedItem = cartItems.find(item => item.id === itemId);
//     setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
//     setCount(prevCount => prevCount - 1);
//     setTotalPrice(prevTotalPrice => prevTotalPrice - (removedItem.finalPrice * removedItem.quantity));
//   };
//   const changeHeroImage = (image) => {
//     setHeroImage(image);
//   };

//   return (
//     <UserContext.Provider value={{ cartItems, addToCart, totalPrice, count, increment, decrement, removeItem,originalPrice,discount,productDetails,product,heroImage,changeHeroImage }}>
//       <div className="App">
//         <Navbar />
//         <Routes>
//         <Route path='/' element={<TechShop />} />
//         <Route path='/Cart' element={<Cart />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/ProductInfo" element={<ProductInfo />} />
//         </Routes>
//       </div>
//     </UserContext.Provider>
//   );
// }

// export default App;


