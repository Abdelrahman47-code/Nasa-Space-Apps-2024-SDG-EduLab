import "../assets/css/homePage.css";
import Hero from "../components/Hero";
import Chatbot from '../components/Chatbot';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <section>
      <Dashboard />
      <Hero />
      <Chatbot />
    </section>
  );
};
export default Home;
