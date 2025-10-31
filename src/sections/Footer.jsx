// Import social media images and links from constants file
import { socialImgs } from "../constants";

// Footer component definition
const Footer = () => {
  return (
    <footer className="footer">
      {/* Main footer container with layout styling */}
      <div className="footer-container">
        
        {/* Left section — Terms & Conditions link or text */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Middle section — Social media icons */}
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              {/* External link to the social platform */}
              <a
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer" // Security best practice for external links
              >
                {/* Social media icon image */}
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>

        {/* Right section — Copyright text */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Sheraz Hahsmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;