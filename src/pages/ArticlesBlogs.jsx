import "../assets/css/blogs.css";
import blog1Img from "../assets/images/blog1.jpg";
import blog2Img from "../assets/images/blog2.png";
import blog3Img from "../assets/images/blog3.png";
import blog4Img from "../assets/images/blog4.png";
import blog5Img from "../assets/images/blog5.png";
import blog6Img from "../assets/images/blog6.jpg";
import blog7Img from "../assets/images/blog7.png";
import blog8Img from "../assets/images/blog8.png";
import blog9Img from "../assets/images/blog9.jpg";

import { Link } from "react-router-dom";


// Article data
const articles = [
  {
    id: 1,
    title: 'The Future of AI',
    date: 'September 28, 2024',
    description: 'An in-depth look at how AI is transforming industries and the future of work.',
    image: blog1Img,
  },
  {
    id: 2,
    title: 'Sustainability in Tech',
    date: 'October 2, 2024',
    description: 'Explore the latest innovations in sustainable technology and green computing.',
    image: blog2Img,
  },
  {
    id: 3,
    title: 'Blockchain Beyond Cryptocurrency',
    date: 'October 10, 2024',
    description: 'Discover how blockchain is disrupting sectors beyond finance.',
    image: blog3Img,
  },
  {
    id: 4,
    title: 'Design Thinking for Innovation',
    date: 'October 15, 2024',
    description: 'Learn how design thinking can foster innovation in product development.',
    image: blog4Img,
  },
  {
    id: 5,
    title: 'The Future of AI',
    date: 'September 28, 2024',
    description: 'An in-depth look at how AI is transforming industries and the future of work.',
    image: blog5Img,
  },
  {
    id: 6,
    title: 'Sustainability in Tech',
    date: 'October 2, 2024',
    description: 'Explore the latest innovations in sustainable technology and green computing.',
    image: blog6Img,
  },
  {
    id: 7,
    title: 'Blockchain Beyond Cryptocurrency',
    date: 'October 10, 2024',
    description: 'Discover how blockchain is disrupting sectors beyond finance.',
    image: blog7Img,
  },
  {
    id: 8,
    title: 'The Future of AI',
    date: 'September 28, 2024',
    description: 'An in-depth look at how AI is transforming industries and the future of work.',
    image: blog8Img,
  },
  {
    id: 9,
    title: 'Sustainability in Tech',
    date: 'October 2, 2024',
    description: 'Explore the latest innovations in sustainable technology and green computing.',
    image: blog9Img,
  },
];

const ArticlesBlogs = () => {
  return (
    <section className="articles-blogs-section">
      <h1 className="section-title">Articles & Blogs</h1>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-image-wrapper">
              <img src={article.image} alt={article.title} className="article-image" />
            </div>
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-date">{article.date}</p>
              <p className="article-description">{article.description}</p>
              <a href="#" className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <section className="solution-button">
        <Link to="/solutions">
            <button className="solution-btn">Do you have a solution?</button>
        </Link>
        </section>
    </section>
  );
};

export default ArticlesBlogs;
