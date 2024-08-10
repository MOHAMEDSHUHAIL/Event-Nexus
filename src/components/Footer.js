import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-heading">Use EventNexus</h3>
          <ul className="footer-list">
            <li><a href="https://www.eventbrite.com/organizer/overview/">Create Events</a></li>
            <li><a href="https://www.eventbrite.com/organizer/pricing/">Pricing</a></li>
            <li><a href="https://www.eventbrite.com/l/event-marketing-platform/">Event Marketing Platform</a></li>
            <li><a href="https://www.eventbrite.com/l/eventbrite-app/">Eventbrite Mobile Ticket App</a></li>
            <li><a href="https://www.eventbrite.com/l/organizer-check-in-app/">EventNexus Check-In App</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Plan Events</h3>
          <ul className="footer-list">
            <li><a href="https://www.eventbrite.com/l/sell-tickets/">Sell Tickets Online</a></li>
            <li><a href="https://www.eventbrite.com/l/planning-an-event/">Event Planning</a></li>
            <li><a href="https://www.eventbrite.com/l/music-venues/">Sell Concert Tickets Online</a></li>
            <li><a href="https://www.eventbrite.com/l/event-payment/">Event Payment System</a></li>
            <li><a href="https://www.eventbrite.com/l/professional-services/">Solutions for Professional Services</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Find Events</h3>
          <ul className="footer-list">
            <li><a href="https://www.eventbrite.com/b/la--new-orleans/food-and-drink/">New Orleans Food & Drink Events</a></li>
            <li><a href="https://www.eventbrite.com/b/ca--san-francisco/holiday/">San Francisco Holiday Events</a></li>
            <li><a href="https://www.eventbrite.com/b/mexico--tulum/music/">Tulum Music Events</a></li>
            <li><a href="https://www.eventbrite.com/b/co--denver/hobbies/">Denver Hobby Events</a></li>
            <li><a href="https://www.eventbrite.com/b/ga--atlanta/music/pop/">Atlanta Pop Music Events</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Connect With Us</h3>
          <ul className="footer-list">
            <li><a href="https://www.eventbrite.com/help/en-us/contact-us/">Contact Support</a></li>
            <li><a href="https://www.eventbrite.com/l/contact-eventbrite-sales/">Contact Sales</a></li>
            <li><a href="https://www.twitter.com/Eventbrite" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com/Eventbrite" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/eventbrite" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/eventbrite" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2024 EventNexus</p>
        <div className="footer-links">
          <ul className="footer-links-row">
            <li><a href="https://www.eventbrite.com/how-it-works">How It Works</a></li>
            <li><a href="https://www.eventbrite.com/organizer/pricing/">Pricing</a></li>
            <li><a href="https://www.eventbrite.com/help/en-us/contact-us/">Contact Support</a></li>
            <li><a href="https://www.eventbrite.com/about/">About</a></li>
            <li><a href="https://www.eventbrite.com/blog/">Blog</a></li>
            <li><a href="https://www.eventbrite.com/help/en-us/">Help</a></li>
            <li><a href="https://www.eventbritecareers.com/">Careers</a></li>
            <li><a href="https://www.eventbrite.com/blog/press/">Press</a></li>
            <li><a href="https://www.eventbrite.com/l/impact/">Impact</a></li>
            <li><a href="https://investor.eventbrite.com/overview/default.aspx">Investors</a></li>
            <li><a href="https://www.eventbrite.com/security/">Security</a></li>
            <li><a href="https://www.eventbrite.com/platform/">Developers</a></li>
            <li><a href="https://www.eventbritestatus.com/">Status</a></li>
            <li><a href="https://www.eventbrite.com/l/legalterms/">Terms</a></li>
            <li><a href="https://www.eventbrite.com/help/en-us/articles/460838/eventbrite-privacy-policy/">Privacy</a></li>
            <li><a href="https://www.eventbrite.com/l/accessibility/">Accessibility</a></li>
            <li><a href="https://www.eventbrite.com/help/en-us/articles/666792/eventbrite-cookie-policy/">Cookies</a></li>
          </ul>
          <ul className="footer-links-row">
            <li><a href="#">Manage Cookie Preferences</a></li>
            <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
          </ul>
        </div>
        <div className="select-container">
          <select aria-labelledby="global-footer-select-label" className="eds-field-styled_input eds-field-styled_select" id="global-footer-select" name="global-footer-select">
            <option value="es_AR" data-spec="select-option">Argentina</option>
            <option value="en_AU" data-spec="select-option">Australia</option>
            <option selected="" value="en_US" data-spec="select-option">United States</option>
            <option selected="" value="en_US" data-spec="select-option">India</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

