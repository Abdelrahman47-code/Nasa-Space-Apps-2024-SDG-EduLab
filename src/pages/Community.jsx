import { Link } from "react-router-dom";
import "../assets/css/communityPage.css";
import placeholderImg from "../assets/images/placeholder.jpg"
import postImg1 from '../assets/images/data.jpg'
import postImg2 from '../assets/images/data.png'
import postImg3 from '../assets/images/image1_0.jpg'
import postImg4 from '../assets/images/logo.jpg'



const Community = () => {
  const members = [
    { name: 'John Doe', imageUrl: placeholderImg },
    { name: 'Alice Smith', imageUrl: placeholderImg },
    { name: 'Bob Johnson', imageUrl: placeholderImg },
    { name: 'Emily Wilson', imageUrl: placeholderImg },
    { name: 'Michael Brown', imageUrl: placeholderImg },
    { name: 'Olivia Davis', imageUrl: placeholderImg },
    { name: 'Daniel Lee', imageUrl: placeholderImg },
    { name: 'Sophia Taylor', imageUrl: placeholderImg },
    { name: 'Matthew Evans', imageUrl: placeholderImg },
    { name: 'Chloe Harris', imageUrl: placeholderImg },
    { name: 'William Martinez', imageUrl: placeholderImg },
    { name: 'Ella Anderson', imageUrl: placeholderImg },
    { name: 'Liam Clark', imageUrl: placeholderImg },
    { name: 'Ava Lewis', imageUrl: placeholderImg },
    { name: 'James Turner', imageUrl: placeholderImg },
    { name: 'Grace Walker', imageUrl: placeholderImg },
    { name: 'Benjamin Hall', imageUrl: placeholderImg },
    { name: 'Lily Moore', imageUrl: placeholderImg },
    { name: 'Henry Green', imageUrl: placeholderImg },
    { name: 'Mia Anderson', imageUrl: placeholderImg },
    { name: 'Ethan White', imageUrl: placeholderImg },
  ];

  const activities = [
    { name: 'Eradicate Poverty Initiatives', icon: 'fa-solid fa-hand-holding-heart', keyword: 'poverty-eradication' },
    { name: 'Promote Quality Education', icon: 'fa-solid fa-school', keyword: 'quality-education' },
    { name: 'Improve Clean Water Access', icon: 'fa-solid fa-water', keyword: 'clean-water' },
    { name: 'Develop Renewable Energy Projects', icon: 'fa-solid fa-solar-panel', keyword: 'renewable-energy' },
    { name: 'Support Climate Action', icon: 'fa-solid fa-leaf', keyword: 'climate-action' },
    { name: 'Promote Gender Equality', icon: 'fa-solid fa-venus', keyword: 'gender-equality' },
    { name: 'Enhance Economic Growth', icon: 'fa-solid fa-chart-line', keyword: 'economic-growth' },
    { name: 'Build Sustainable Communities', icon: 'fa-solid fa-city', keyword: 'sustainable-communities' },
    { name: 'Protect Marine Ecosystems', icon: 'fa-solid fa-fish', keyword: 'marine-ecosystems' },
    { name: 'Combat Hunger and Malnutrition', icon: 'fa-solid fa-apple-alt', keyword: 'combat-hunger' },
  ];
  

  const communityPosts = [
    {
      title: 'Climate Change and Rising Sea Levels',
      photo: placeholderImg,
      author: 'Jane Smith',
      content: 'The effects of climate change on sea levels are becoming increasingly evident. Coastal communities worldwide are facing the challenge of adapting to rising seas and more frequent flooding events.',
    },
    {
      title: 'Food Security in a Growing World Population',
      photo: placeholderImg,
      author: 'Michael Johnson',
      content: 'As the global population continues to grow, ensuring food security for all becomes a paramount concern. Sustainable agricultural practices and equitable distribution are critical to address this challenge.',
    },
    {
      title: 'Access to Clean Water: A Global Imperative',
      photo: placeholderImg,
      author: 'Emily Davis',
      content: 'Many regions worldwide still lack reliable access to clean and safe drinking water. Addressing this issue requires concerted efforts to improve infrastructure and implement sustainable water management practices.',
    },
    {
      title: 'Biodiversity Conservation in the Face of Habitat Loss',
      photo: placeholderImg,
      author: 'David Brown',
      content: 'Habitat loss due to factors like deforestation and urbanization poses a significant threat to global biodiversity. Conservation efforts are crucial to protect endangered species and preserve ecosystems.',
      images: [
        { url: postImg3, alt: 'Image 3 Alt Text' },
        { url: postImg4, alt: 'Image 4 Alt Text' },
      ],
    },
    {
      title: 'Economic Disparities and Income Inequality',
      photo: placeholderImg,
      author: 'Alex Rodriguez',
      content: 'Addressing economic disparities and income inequality is crucial for achieving social justice and sustainable development. Policies promoting fair wages, education, and access to opportunities are key components of this effort.',
    },
    {
      title: 'Mental Health Awareness and Support',
      photo: placeholderImg,
      author: 'Sophia Anderson',
      content: 'Mental health issues affect millions worldwide. Raising awareness, reducing stigma, and improving access to mental health resources are essential steps toward a healthier and more inclusive society.',
    },
    {
      title: 'Digital Divide and Access to Technology',
      photo: placeholderImg,
      author: 'Daniel Kim',
      content: 'The digital divide creates inequalities in access to information and opportunities. Bridging this gap through initiatives like affordable internet access and technology training is crucial in our increasingly digital world.',
      images: [
        { url: postImg1, alt: 'Image 1 Alt Text' },
        { url: postImg2, alt: 'Image 2 Alt Text' },
      ],
    },
    {
      title: 'Global Health Pandemics: Preparedness and Response',
      photo: placeholderImg,
      author: 'Olivia Wilson',
      content: 'Recent global health crises highlight the importance of preparedness and coordinated response efforts. Strengthening healthcare systems, early detection, and international cooperation are vital in mitigating future pandemics.',
    },
  ];
  

  return <section className="communityPage">
    <div className="activities">
      <h2>Activities</h2>
      <div className="activity-cards">
        {activities.map((activity, index) => {
          return (
            <div key={index} className="activity-card" style={{ backgroundImage: `url(${placeholderImg})` }}>
              <Link to={`/${activity.keyword}`} className="activity-link">
                <div className="activity-content">
                  <i className={activity.icon}></i>
                  <h3>{activity.name}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>

    <div className="community">
      <h1>Posts</h1>
      <form>
        <button type="submit">Post</button>
        <input type="text" placeholder="Write a new post" />
      </form>
      <div className="posts">
        {communityPosts.map(post => {
          return <div className="post">
            <div className="publisher">
              <img src={post.photo} alt={post.author} />
              <h4>{post.author}</h4>
            </div>
            <div className="content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="images">
                {post.images?.map(image => {
                  return <img src={image.url} alt={image.alt} />
                })}
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
    <div className="members">
      <h2>Members</h2>
      <form>
        <button type="submit">Search</button>
        <input type="text" placeholder="Search" />
      </form>
      <div className="list">
        {members.map(member =>{
          return <div className="item">
          <img src={member.imageUrl} alt="" />
          <h3>{member.name}</h3>
          </div>
        })}
      </div>
    </div>
  </section>;
};

export default Community;
