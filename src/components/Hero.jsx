import sdg1Img from "../assets/images/sdg1.jpg";
import sdg2Img from "../assets/images/sdg2.jpg";
import sdg3Img from "../assets/images/sdg3.jpg";
import sdg4Img from "../assets/images/sdg4.jpg";
import sdg5Img from "../assets/images/sdg5.jpg";
import sdg6Img from "../assets/images/sdg6.jpg";
import sdg7Img from "../assets/images/sdg7.jpg";
import sdg8Img from "../assets/images/sdg8.jpg";
import sdg9Img from "../assets/images/sdg9.jpg";
import sdg10Img from "../assets/images/sdg10.jpg";
import sdg11Img from "../assets/images/sdg11.jpg";
import sdg12Img from "../assets/images/sdg12.jpg";
import sdg13Img from "../assets/images/sdg13.jpg";
import sdg14Img from "../assets/images/sdg14.jpg";
import sdg15Img from "../assets/images/sdg15.jpg";
import sdg16Img from "../assets/images/sdg16.jpg";
import sdg17Img from "../assets/images/sdg17.jpg";
import sdgs from "../assets/videos/sdgs.mp4";

import { Link } from "react-router-dom";

const Hero = () => {
  const sdgCards = [
    {
      id: 1,
      name: "No Poverty",
      img: sdg1Img,
      stats: "736M people live in extreme poverty",
      link: "/sdg/1",
    },
    {
      id: 2,
      name: "Zero Hunger",
      img: sdg2Img,
      stats: "690M people are undernourished",
      link: "/sdg/2",
    },
    {
      id: 3,
      name: "Good Health & Well-being",
      img: sdg3Img,
      stats: "At least half the world lacks access to essential health services",
      link: "/sdg/3",
    },
    {
      id: 4,
      name: "Quality Education",
      img: sdg4Img,
      stats: "262M children are out of school globally",
      link: "/sdg/4",
    },
    {
      id: 5,
      name: "Gender Equality",
      img: sdg5Img,
      stats: "1 in 3 women have experienced physical or sexual violence",
      link: "/sdg/5",
    },
    {
      id: 6,
      name: "Clean Water & Sanitation",
      img: sdg6Img,
      stats: "2.2B people lack safely managed drinking water",
      link: "/sdg/6",
    },
    {
      id: 7,
      name: "Affordable & Clean Energy",
      img: sdg7Img,
      stats: "789M people lack access to electricity",
      link: "/sdg/7",
    },
    {
      id: 8,
      name: "Decent Work & Economic Growth",
      img: sdg8Img,
      stats: "61% of workers globally are in informal employment",
      link: "/sdg/8",
    },
    {
      id: 9,
      name: "Industry, Innovation & Infrastructure",
      img: sdg9Img,
      stats: "Infrastructure investment in low-income countries remains below 1%",
      link: "/sdg/9",
    },
    {
      id: 10,
      name: "Reduced Inequalities",
      img: sdg10Img,
      stats: "The income gap between rich and poor continues to grow",
      link: "/sdg/10",
    },
    {
      id: 11,
      name: "Sustainable Cities & Communities",
      img: sdg11Img,
      stats: "4.2B people live in cities; 90% of urban growth will occur in developing nations",
      link: "/sdg/11",
    },
    {
      id: 12,
      name: "Responsible Consumption & Production",
      img: sdg12Img,
      stats: "13.8B tons of plastic end up in oceans yearly",
      link: "/sdg/12",
    },
    {
      id: 13,
      name: "Climate Action",
      img: sdg13Img,
      stats: "Global temperatures have risen by 1.1°C since the late 19th century",
      link: "/sdg/13",
    },
    {
      id: 14,
      name: "Life Below Water",
      img: sdg14Img,
      stats: "Over 3B people depend on marine biodiversity",
      link: "/sdg/14",
    },
    {
      id: 15,
      name: "Life on Land",
      img: sdg15Img,
      stats: "Biodiversity loss is accelerating: 1M species are at risk of extinction",
      link: "/sdg/15",
    },
    {
      id: 16,
      name: "Peace, Justice & Strong Institutions",
      img: sdg16Img,
      stats: "Corruption, bribery, and conflict weaken justice systems globally",
      link: "/sdg/16",
    },
    {
      id: 17,
      name: "Partnerships for the Goals",
      img: sdg17Img,
      stats: "Only 54% of countries have reliable data for SDG monitoring",
      link: "/sdg/17",
    },
  ];

  return (
    <div className="hero">
      <div className="container">
        {/* SDG Cards Section */}
        <div className="sdg-cards">
          {sdgCards.map((sdg) => (
            <Link to={`/sdg/${sdg.id}`} key={sdg.id} className="sdg-card">
              <div className="sdg-card-content">
                <img src={sdg.img} alt={sdg.name} className="sdg-image" />
                <div className="sdg-hover">
                  <p className="sdg-name">{sdg.name}</p>
                  <p className="sdg-stats">{sdg.stats}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Video Introduction */}
        <section className="video-introduction">
          <p className="video_p">
            The Sustainable Development Goals (SDGs) are a universal call to
            action to end poverty, protect the planet, and ensure that all people
            enjoy peace and prosperity by 2030. This video provides a comprehensive
            overview of the 17 SDGs and the global efforts towards achieving them.
          </p>
        </section>

        {/* SDG Video Section */}
        <section className="video-section">
          <video controls width="100%">
            <source src={sdgs} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* History of SDGs Section */}
        <section className="history-sdgs">
          <h2 className="history-title">History of SDGs</h2>
          <p className="history-paragraph">
            The Sustainable Development Goals (SDGs) were adopted by all United Nations
            Member States in 2015 as a universal call to action to end poverty, protect
            the planet, and ensure that by 2030 all people enjoy peace and prosperity.
            The 17 SDGs are integrated—they recognize that action in one area will affect
            outcomes in others and that development must balance social, economic, and
            environmental sustainability.
          </p>
        </section>

        {/* Embedded SDGs Dashboard Section */}
        <section className="sdgs-dashboard">
          <h2>SDGs Dashboard</h2>
          <iframe
            src="https://www.sdgsdashboard.org/"
            width="100%"  // Ensures full width
            height="600px"
            style={{ border: "none" }}
            title="SDGs Dashboard"
          />
        </section>

        {/* "Do you have a solution?" Button */}
        <section className="solution-button">
          <Link to="/solutions">
            <button className="solution-btn">Do you have a solution?</button>
          </Link>
        </section>

      </div>
    </div>
  );
};

export default Hero;
