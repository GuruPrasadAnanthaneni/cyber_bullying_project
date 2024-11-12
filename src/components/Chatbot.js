import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

function Chatbot({ onHomeClick }) {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Billy, your cyberbullying support assistant. How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [intents, setIntents] = useState([]);

  useEffect(() => {
    // Fetch intents from the JSON file
    fetch('/intents.json')
      .then(response => response.json())
      .then(data => setIntents(data.intents))
      .catch(error => console.error('Error loading intents:', error));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');

      setTimeout(() => {
        const botResponse = generateResponse(input);
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: "bot" }]);
      }, 1000);
    }
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    for (let intent of intents) {
      if (intent.examples && intent.examples.some(example => lowerInput.includes(example.toLowerCase()))) {
        return intent.responses[Math.floor(Math.random() * intent.responses.length)];
      }
    }
    return "I'm here to help. Could you clarify further?";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h3>Billy - Cyberbullying Support Chatbot</h3>
        <button className="home-button" onClick={onHomeClick}>Home</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={handleKeyPress}
          placeholder="Type your message..." 
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
