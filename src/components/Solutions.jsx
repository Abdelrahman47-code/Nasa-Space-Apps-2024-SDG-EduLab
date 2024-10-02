import { useState } from 'react';
import "../assets/css/solutions.css";

const Solutions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: '',
    solutionFile: null,
  });

  const [solutions, setSolutions] = useState([
    {
      image: 'https://via.placeholder.com/300',
      personName: 'John Doe',
      country: 'USA',
      date: '2023-10-01',
      challenge: 'Clean Water',
    },
    {
      image: 'https://via.placeholder.com/300',
      personName: 'Jane Smith',
      country: 'UK',
      date: '2023-09-28',
      challenge: 'Climate Action',
    },
  ]);

  const challenges = [
    'Eradicate Poverty',
    'Quality Education',
    'Clean Water',
    'Renewable Energy',
    'Climate Action',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, solutionFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSolution = {
      image: 'https://via.placeholder.com/300', // You can replace this with a dynamic image URL
      personName: formData.name,
      country: 'Unknown', // You can add a field for the country as well if needed
      date: new Date().toISOString(),
      challenge: formData.challenge,
    };
    setSolutions([newSolution, ...solutions]);
    setFormData({ name: '', email: '', challenge: '', solutionFile: null });
  };

  return (
    <div className="solutions-container">
      {/* Form Section */}
      <div className="solution-form-container">
        <h2>Submit Your Solution</h2>
        <form onSubmit={handleSubmit} className="solution-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a Challenge
            </option>
            {challenges.map((challenge, index) => (
              <option key={index} value={challenge}>
                {challenge}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="solutionFile"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
          <button type="submit" className="submit-btn">
            Submit Solution
          </button>
        </form>
      </div>

      {/* Cards Section for Previous Solutions */}
      <div className="solutions-card-section">
        <h2>Previous Solutions</h2>
        <div className="solutions-card-container">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <img
                src={solution.image}
                alt={solution.personName}
                className="solution-image"
              />
              <div className="solution-info">
                <h3>{solution.personName}</h3>
                <p>Country: {solution.country}</p>
                <p>Challenge: {solution.challenge}</p>
                <p>Date: {new Date(solution.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
