import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer className="admin-footer">
        <div className="row align-items-center">
          <div className="col-md-4 col-12 footer-logo">
            <span>NShare</span>
          </div>
          <div className="col-md-4 col-12 footer-copy text-center">
            © 2026 NShare. All rights reserved
          </div>
          <div className="col-md-4 col-12 footer-social">
            <ul>
              <li>
                <FiFacebook />
              </li>
              <li>
                <FiInstagram />
              </li>
              <li>
                <FiYoutube />
              </li>
              <li>
                <FiTwitter />
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
