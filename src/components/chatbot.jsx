// src/components/Chatbot.jsx
import React, { useState } from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle new user message
  const handleNewUserMessage = async (newMessage) => {
    setMessages([...messages, { text: newMessage, isUserMessage: true }]);

    // Handle response from chatbot (send message to backend)
    const response = await getChatbotResponse(newMessage);
    setMessages([...messages, { text: newMessage, isUserMessage: true }, { text: response, isUserMessage: false }]);
  };

  // Get response from the backend based on user message
  const getChatbotResponse = async (message) => {
    try {
      let response;

      if (message.toLowerCase().includes('quiz')) {
        // Send request for quiz (quiz could be fetched from backend or predefined)
        response = 'Let me quiz you on your weak topics!';
      } else if (message.toLowerCase().includes('explain')) {
        // Handle note explanation, send request to backend
        response = 'Please upload your notes, and I will explain them!';
      } else {
        // Send general message to backend (API call to process the question)
        const backendResponse = await fetch('http://localhost:5000/chatbot/question', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
        });

        const data = await backendResponse.json();
        response = data.answer || 'I am not sure how to respond to that.';
      }

      return response;
    } catch (error) {
      console.error('Error getting response:', error);
      return 'Sorry, I couldn\'t process your request.';
    }
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="StudyBot"
        subtitle="Ask me anything about your course!"
      />
    </div>
  );
};

export default Chatbot;

