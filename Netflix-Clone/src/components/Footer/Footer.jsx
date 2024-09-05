// eslint-disable-next-line no-unused-vars
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          
          {/* Social Media Icons */}
          <div className="footer_icons">
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
            <YouTubeIcon />
          </div>

          {/* Footer Links */}
          <div className="footer_lists">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Legal Notices</li>
                <li>Do Not Sell or Share My Personal Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Netflix Shop</li>
                <li>Cookies Preferences</li>
                <li>Ad Choices</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
          </div>
          
          {/* Service Code */}
          <div className="Service_Code">
            <p>Service Code</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
