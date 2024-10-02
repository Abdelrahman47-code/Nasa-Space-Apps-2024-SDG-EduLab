import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import pearson1Img from "../assets/images/pearson1.jpg";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 className="gradientText">SDG EduLab</h1>
        </div>
        <div className="menu">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="eventsnews" className="link">
            News
          </NavLink>
          <NavLink to="articlesblogs" className="link">
            Blogs
          </NavLink>
          <NavLink to="competitionspage" className="link">
            Competitions
          </NavLink>
          <NavLink to="community" className="link">
            Community
          </NavLink>
          <NavLink to="contact" className="link">
            Contact Us
          </NavLink>
        </div>
        <div className="user">
          <NavLink to="login" className="link">
            Login | Register
          </NavLink>
        </div>
        <div className="profile-section">
          <img
            src={pearson1Img}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
