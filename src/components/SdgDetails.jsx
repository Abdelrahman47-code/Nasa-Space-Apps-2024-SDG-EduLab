import { useParams } from "react-router-dom";
import sdgData from "./sdgData"
import "../assets/css/sdgdetails.css";

const SdgDetails = () => {
  const { id } = useParams();
  const sdg = sdgData.find((sdg) => sdg.id === parseInt(id));

  return (
    <div className="sdg-details">
      <div className="sdg-content">
        <div className="text-section">
          <h1>{sdg.name}</h1>
          <p>{sdg.description}</p>
        </div>
        <div className="image-section">
          <img src={sdg.img} alt={sdg.name} />
        </div>
      </div>

      <div className="video-section">
        <video controls width="100%">
          <source src={sdg.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="related-articles">
        <h2>Related Articles and Papers</h2>
        <div className="article-cards">
          {sdg.articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SdgDetails;
