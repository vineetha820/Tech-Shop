// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// function UserProfile({ handleRemoveClick }) {
//   const [showEmailInput, setShowEmailInput] = useState(false);
//   const [showCreateAccount, setShowCreateAccount] = useState(false);

//   const handleSignUpClick = () => {
//     setShowEmailInput(true);
//   };

//   const handleCreateAccountClick = () => {
//     setShowCreateAccount(true);
//   };

//   return (
//     <div className="signup-container">
//     <div className="sign-up-section">
//       {showCreateAccount ? (
//         <form className="signup-form">
//           <FontAwesomeIcon icon={faTimes} className="remove-icon" onClick={handleRemoveClick} />
//           <h2>Signup</h2>
//           <p>Already have an account? login</p>
          
//           <input type="text" placeholder="Username" id="form_data"/><br />
//           <input type="email" placeholder="Email" id="form_data"/><br />
//           <input type="password" placeholder="Password" id="form_data" /><br />
//           <input type="password" placeholder="Conform Password" id="form_data"/><br />
//           <button id="form_signup_btn">SignUp</button>
          
//           <p>or login with</p>
//           <div id="form_btn">
//             <button id="facebook_btn">Facebook</button>
//             <button  id="google_btn">Google</button>
//             <button id="twiter-btn">Twitter</button>
//           </div>
//         </form>
//       ) : (
//         showEmailInput ? (
//           <form className="login-form">
//             <FontAwesomeIcon icon={faTimes} className="remove-icon" onClick={handleRemoveClick} />
//             <h3>Login</h3>
//             <p>New to PRAVALIKA GORANTLA? <span onClick={handleCreateAccountClick}>Create an account</span></p>
//             <input type="email" placeholder="Email"id="form_data" /><br />
//             <input type="password" placeholder="Password" id="form_data"/><br />
//             <button>Login</button>
//             <p>or login with</p>
//             <div id="form_btn">
//               <button id="facebook_btn">Facebook</button>
//               <button  id="google_btn">Google</button>
//               <button id="twiter-btn">Twitter</button>
//             </div>
//           </form>
//         ) : (
//           <>
//             <div id="form_1">
//               <h3>Hello!</h3>
//               <p id="form_desc">Access account and manage order</p>
//               <button id="login_signup_btn" onClick={handleSignUpClick}>Login/Sign Up</button>
//               <hr />
//               <p>Please Login</p>
//             </div>
//           </>
//         )
//       )}
//     </div>
//     </div>
//   );
// }

// export default UserProfile;
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./user.css";

function User() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
    setShowCreateAccountForm(false); // Close create account form when switching to login form
  };

  const toggleCreateAccountForm = () => {
    setShowCreateAccountForm(!showCreateAccountForm);
    setShowSignupForm(false); // Close login form when switching to create account form
  };
  const closeTab=()=>{
    setShowCreateAccountForm(false);
    setShowSignupForm(false); 
  }

  return (
    
    <div className="user">
   
      <h5>Hello!</h5>
      <p>Access accounts and manage orders</p>
      <button onClick={toggleSignupForm}>Login/Signup</button>
      <hr />
      <h5>Please Login</h5>
      
   
      {showSignupForm && !showCreateAccountForm && (
        <div className="signup-form-container">
          <div className="signup-form">
            <FontAwesomeIcon icon={faTimes} className="close" onClick={closeTab} />
            <div>
              <h3>Login</h3>
              <p>New to tech shop? <span onClick={toggleCreateAccountForm}>Create an account</span></p>
              <form id="login-input">
                <input type="text" placeholder="Email" /><br/>
                <input type="text" placeholder="Password" /><br/>
                <button id="signup-btn">Signup</button>
                <p>or Login With</p>
                <div id="three-btn">
                  <button id="btn1">Facebook</button>
                  <button id="btn2">Google</button>
                  <button id="btn3">Twitter</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showCreateAccountForm && !showSignupForm && (
        <div className="create-account-form">
          <h3>Create an Account <span onClick={toggleSignupForm}>|loign</span> </h3>
          <FontAwesomeIcon icon={faTimes} className="close" onClick={closeTab} />
          <form id="form-input">
            <input type="text" placeholder="Username" value="username" />
            <input type="text" placeholder="Email" value="email" />
            <input type="password" placeholder="Password" value="password" />
            <input type="password" placeholder="Confirm Password" value="confirmPassword" />
            <button id="signup-btn">Signup</button>
            <p>or Login With</p>
            <div id="three-btn">
              <button id="btn1">Facebook</button>
              <button id="btn2">Google</button>
              <button id="btn3">Twitter</button>              
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default User;
