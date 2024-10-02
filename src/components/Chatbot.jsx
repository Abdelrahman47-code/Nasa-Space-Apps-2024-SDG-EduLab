import { useState } from 'react';
import "../assets/css/chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-button" onClick={toggleChatbot}>
        💬
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Chatbot</h4>
            <button className="close-button" onClick={toggleChatbot}>
              &times;
            </button>
          </div>
          <div className="chatbot-messages">
            <div className="message">
              <div className="bot-message">Hello! How can I assist you today?</div>
            </div>
            {/* Add more messages here */}
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
