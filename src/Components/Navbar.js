import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import { UserContext } from '../App';
import SearchBar from './SearchBar';
import UserProfile from './User';
function Navbar() {
  const { count } = useContext(UserContext);
  const [showSearch, setShowSearch] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close search bar when navigating to a new page
    setShowSearch(false);
  }, [location.pathname]); // Listen for changes in the route

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    // Hide user component when search is clicked
  };
  const handleCloseSearch = () => {
    setShowSearch(false); // Close the search bar
  };
  const handleProfileClick = () => {
    setShowSignUp(!showSignUp);
  };

  const handleRemoveClick = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      <nav>
        <Link to="/">Tech-Shop</Link>
        <ul>
          <li>
            {showSearch ?<div> <SearchBar closeSearchBar={handleCloseSearch} />
            <FontAwesomeIcon icon={faSearch} onClick={handleSearchClick} />
          </div> : <FontAwesomeIcon icon={faSearch} onClick={handleSearchClick} />}
          </li>
          <li>
            <Link to="/Cart"><FontAwesomeIcon icon={faShoppingCart} />
           { count>0?<span className='cart_count'>{count}</span>:<span></span>
  }
            </Link>
          </li>
          <li style={{ position: "relative" }}>
          <FontAwesomeIcon icon={faUser} style={{ color: "white" }} onMouseOver={handleProfileClick} />
          {showSignUp && <UserProfile handleRemoveClick={handleRemoveClick} />}
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;






