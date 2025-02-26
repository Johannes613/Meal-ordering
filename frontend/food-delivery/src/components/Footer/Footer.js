import "./Footer.css";
import { assets } from "../../assets/assets";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-section">
          <img class="footer-logo" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero
            molestias animi ex aliquid saepe illum cum plorem Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Exercitationem,
            numquam!raesentium excepturi dolore.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="quick-links">
          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="contact-add">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+971 54 394 8653</li>
            <li>yohannisadmasu613@gmail.com</li>
          </ul>
        </div>
      </div>
      <p className="copy-right">
        Copyright &copy; 2025 Tomato.com- All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
