import { useState, useEffect } from 'react';
import "../assets/css/dashboard.css";

const Dashboard = () => {
  const stats = [
    { id: 1, title: "Targets", targetNumber: 169 },
    { id: 2, title: "Events", targetNumber: 3968 },
    { id: 3, title: "Publications", targetNumber: 1351 },
    { id: 4, title: "Actions", targetNumber: 7866 }
  ];

  const useCounter = (targetNumber) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 1;
      const duration = 3000;
      const incrementTime = Math.abs(Math.floor(duration / targetNumber));

      const counter = setInterval(() => {
        if (start < targetNumber) {
          start = start + 10;
          setCount(start);
        } else {
          clearInterval(counter);
        }
      }, incrementTime);

      return () => clearInterval(counter);
    }, [targetNumber]);

    return count;
  };

  return (
    <div className="dashboard">
      <div className="hero">
        <div className="container">
          <h1>
            Welcome to <span>SDG EduLab</span>
          </h1>
          <p className="title">Explore and engage with the 17 Sustainable Development Goals for a Sustainable Future</p>
        </div>
        <div className="dashboard-grid">
            {stats.map((stat) => (
            <div key={stat.id} className="dashboard-card">
                <h3>{stat.title}</h3>
                <p className="count">{useCounter(stat.targetNumber)}</p>
            </div>
            ))}
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
