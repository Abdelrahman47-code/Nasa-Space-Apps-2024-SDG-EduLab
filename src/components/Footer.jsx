// const Footer = () => {
//   return (
//     <footer>
//       <div className="copyright_text">
//         <span className="gradientText">
//           Copyright 2023 &copy; All Right Reserved
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section for quick links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Section for social media icons */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Section for additional info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright section */}
      <div className="copyright_text">
        <span>
          Copyright 2024 &copy; SDG EduLab - All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
