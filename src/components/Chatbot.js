import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

function Chatbot({ onHomeClick }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const messagesEndRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setMessages([
      {
        text: "Hello! I'm here to assist you.",
        sender: "bot",
      },
    ]);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");

      setTimeout(() => {
        const botResponse = generateResponse(input);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: "bot" },
        ]);
      }, 1000);
    }
  };

  const generateResponse = (input) => {
    const responses = [
      "Thank you for reaching out.",
      "I'm here to help!",
      "Can you please elaborate?",
      "That sounds interesting. Tell me more.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);

    setTimeout(() => {
      // Simulate file upload success
      setIsUploading(false);
      const fakeFileUrl = URL.createObjectURL(file);
      setFileUrl(fakeFileUrl);
      console.log("File uploaded successfully:", fakeFileUrl);
    }, 2000);
  };

  const toggleChatbot = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <span>💬</span>
      </div>
      <div className={`chatbot ${isChatOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <h3>Billy - Cyberbullying Support Chatbot</h3>
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
          <button onClick={handleSend} disabled={isUploading}>
            {isUploading ? "Uploading..." : "Send"}
          </button>
        </div>
        <div className="file-upload">
          <input
            type="file"
            onChange={handleFileChange}
            accept="*/*"
            id="file-input"
          />
          {fileUrl && <p>File uploaded successfully!</p>}
        </div>
      </div>
    </>
  );
}

export default Chatbot;
