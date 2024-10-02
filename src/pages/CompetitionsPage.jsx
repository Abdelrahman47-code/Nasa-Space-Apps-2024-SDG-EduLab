import { useState, useEffect } from 'react';
import "../assets/css/CompetitionsPage.css";

const leaderboardData = [
    { rank: 1, name: "John Doe", country: "USA", points: 1200 },
    { rank: 2, name: "Jane Smith", country: "CAN", points: 1100 },
    { rank: 3, name: "Alice Brown", country: "UK", points: 1050 },
    { rank: 4, name: "Charlie Davis", country: "AUS", points: 1000 },
    { rank: 5, name: "Emily White", country: "GER", points: 950 }
];

const competitionsData = [
    {
        title: "Clean Water Challenge",
        description: "Propose solutions to ensure access to safe and affordable drinking water for all.",
        status: "Open"
    },
    {
        title: "Affordable Energy Challenge",
        description: "Submit your ideas to make clean, affordable energy accessible worldwide.",
        status: "Open"
    },
    {
        title: "Gender Equality Challenge",
        description: "Provide innovative solutions to empower women and achieve gender equality.",
        status: "Open"
    },
    {
        title: "Climate Action Hackathon",
        description: "Innovate to fight climate change by creating sustainable environmental practices.",
        status: "Coming Soon"
    }
];

const CompetitionsPage = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        // Simulate API call to get leaderboard data
        setLeaderboard(leaderboardData);
    }, []);

    return (
        <div className="competitions-page">
            <div className="competitions-content">
                <section className="competitions-section">
                    <h1>SDG Competitions</h1>
                    <p>Participate in challenges to help achieve the Sustainable Development Goals (SDGs).</p>

                    <div className="competitions-container">
                        {competitionsData.map((comp, index) => (
                            <div key={index} className="competition-card">
                                <h2>{comp.title}</h2>
                                <p>{comp.description}</p>
                                <span className={`status ${comp.status === "Open" ? "open" : "coming-soon"}`}>
                                    {comp.status}
                                </span>
                                <button
                                    className="join-btn"
                                    disabled={comp.status !== "Open"}
                                >
                                    {comp.status === "Open" ? "Join Now" : "Coming Soon"}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="leaderboard-section">
                    <h1>Leaderboard</h1>
                    <p>See who's leading the SDG competition rankings.</p>
                    <div className="leaderboard-container">
                        {leaderboard.map((user, index) => (
                            <div key={index} className="leaderboard-entry">
                                <div className="user-avatar">{user.name[0]}</div>
                                <div className="leaderboard-info">
                                    <span className="user-name">{user.name}</span>
                                    <span className="user-country">{user.country}</span>
                                    <span className="user-score">{user.points} pts</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CompetitionsPage;
