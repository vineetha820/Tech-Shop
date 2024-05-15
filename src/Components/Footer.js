import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    // State to hold the email input value
    const [email, setEmail] = useState('');

    // Function to handle subscribe button click
    const handleSubscribe = () => {
        if (email.trim() === '') {
            alert('Please enter your email address.');
            return; // Stop further execution
        }

        // Perform subscription logic here (if needed)
        console.log('Subscribed with email:', email);
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="footer-container">
            <div className="footer-section">
                <div className="section-1">
                    <h1>Tech-Shop</h1>
                    <p className="text">Subscribe to our Email Alerts to receive early discount offers, and now products info</p>
                    <input 
                        type="text" 
                        placeholder="Email Address*" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                      
                    /><br/><br/>
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>
                <div className="section-2">
                    <h1>Help</h1>
                    <p>FAQs</p>
                    <p>Track Order</p>
                    <p>cancel Order</p>
                    <p>Return Order</p>
                    <p>Warranty info</p>
                </div>
                <div className="section-3">
                    <h1>Policies</h1>
                    <p>Return Policy</p>
                    <p>Security</p>
                    <p>Sitemap</p>
                    <p>Privacy policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="section-4">
                    <h1>Company</h1>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Service Centers</p>
                    <p>careers</p>
                    <p>Affillates</p>
                </div>
            </div>
            <hr/>
            <div className="section-5">
                <h3 id="name">2023|All Rights Reserved.Built by |SREEANUSHA</h3>
                <div className="footer_icons">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faTwitter} className="twitter" />
                    <FontAwesomeIcon icon={faInstagram} className="instagram" />
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                    <FontAwesomeIcon icon={faAngleUp} className="scroll-to-top" onClick={scrollToTop}   />
                </div>
            </div>
        </div>
    );
}

export default Footer;