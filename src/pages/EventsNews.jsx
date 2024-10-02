import "../assets/css/eventsnews.css";

import news1Img from "../assets/images/news1.jpg";
import news2Img from "../assets/images/news2.jpg";
import news3Img from "../assets/images/news3.png";
import news4Img from "../assets/images/news4.jpg";
import news5Img from "../assets/images/news5.jpeg";
import news6Img from "../assets/images/news6.png";
import news7Img from "../assets/images/news7.png";
import news8Img from "../assets/images/news8.png";
import news9Img from "../assets/images/news9.jpg";


const events = [
  {
    id: 1,
    title: 'Main Event',
    date: 'October 1, 2024',
    description: 'This is the most important event of the month. Join us for a celebration!',
    image: news1Img,
  },
  {
    id: 2,
    title: 'Secondary Event 1',
    date: 'October 2, 2024',
    description: 'Learn more about sustainability at this workshop.',
    image: news2Img,
  },
  {
    id: 3,
    title: 'Secondary Event 2',
    date: 'October 3, 2024',
    description: 'Join us for a discussion on SDG-related topics with industry experts.',
    image: news3Img,
  },
  {
    id: 4,
    title: 'Main Event 2',
    date: 'October 4, 2024',
    description: 'Our second large event of the month!',
    image: news4Img,
  },
  {
    id: 5,
    title: 'Secondary Event 3',
    date: 'October 5, 2024',
    description: 'Join us for a creative session on design thinking.',
    image: news5Img,
  },
  {
    id: 6,
    title: 'Secondary Event 4',
    date: 'October 6, 2024',
    description: 'A hands-on workshop on AI and ML in healthcare.',
    image: news6Img,
  },
  {
    id: 7,
    title: 'Main Event 2',
    date: 'October 4, 2024',
    description: 'Our second large event of the month!',
    image: news7Img,
  },
  {
    id: 8,
    title: 'Secondary Event 3',
    date: 'October 5, 2024',
    description: 'Join us for a creative session on design thinking.',
    image: news8Img,
  },
  {
    id: 9,
    title: 'Secondary Event 4',
    date: 'October 6, 2024',
    description: 'A hands-on workshop on AI and ML in healthcare.',
    image: news9Img,
  }
];

const EventsNews = () => {
//   let eventIndex = 0;

  return (
    <section className="events-news-section">
      <h1 className="section-title">Events & News</h1>
      {events.map((event, index) => {
        if (index % 3 === 0) {
          const isMainLeft = index % 2 === 0;
          const secondaryEvents = events.slice(index + 1, index + 3);

          return (
            <div
              className={`events-container ${isMainLeft ? 'reverse' : ''}`}
              key={event.id}
            >
              {/* Big card */}
              <div className={`main-card ${isMainLeft ? 'left' : 'right'}`}>
                <img src={event.image} alt={event.title} />
                <div className="main-card-content">
                  <h2>{event.title}</h2>
                  <p>{event.date}</p>
                  <p>{event.description}</p>
                </div>
              </div>

              {/* Small cards */}
              <div className="secondary-cards">
                {secondaryEvents.map(secondaryEvent => (
                  <div key={secondaryEvent.id} className="secondary-card">
                    <img src={secondaryEvent.image} alt={secondaryEvent.title} />
                    <div className="secondary-card-content">
                      <h3>{secondaryEvent.title}</h3>
                      <p>{secondaryEvent.date}</p>
                      <p>{secondaryEvent.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default EventsNews;
