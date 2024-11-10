import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './css/Chat.css'; // Ensure this CSS file is linked

const genAi = new GoogleGenerativeAI("AIzaSyDfJBywDN6b8K68p92bynyWRCg_pJ-I-9E");
const model = genAi.getGenerativeModel({
  "model": "gemini-1.5-flash",
});

const Chat = () => {
  const [ingredients, setIngredients] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!ingredients.trim()) return; // Prevent sending empty messages

    const userMessage = {
      type: 'user',
      text: ingredients,
    };

    setMessages((prev) => [...prev, userMessage]); // Add user message to chat
    setIngredients(''); // Clear input
    setLoading(true); // Set loading state

    // Create the prompt for AI
    const prompt = `Suggest recipes that can be made only with the following ingredients: ${ingredients} (No extra ingredients should be used other than this). Please include ingredients and preparation steps.`;

    try {
      const response = await model.generateContent(prompt);
      const aiMessage = {
        type: 'ai',
        text: formatRecipeText(response.response.text().trim()),
      };
      
      setMessages((prev) => [...prev, aiMessage]); // Add AI response to chat
    } catch (error) {
      console.error('Error generating AI response:', error);
      const errorMessage = {
        type: 'ai',
        text: 'Sorry, I could not process your request. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}`}>
            {msg.type === 'ai' ? (
              <div className="recipe" dangerouslySetInnerHTML={{ __html: msg.text }} />
            ) : (
              msg.text
            )}
          </div>
        ))}
        {loading && <div className="chat-message ai">Loading...</div>} {/* Loading indicator */}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma-separated)"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

// Function to format the recipe text into HTML with proper structure
const formatRecipeText = (text) => {
  console.log(text);
  return text
    .replace(/##\s/g, '<h2>') // Replace "##" with <h2> for recipe title
    .replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>') // Replace "**Title**" with <h3>Title</h3>
    .replace(/\*\s\*\*/g, '')
    
    .replace(/\* (.*?)\n/g, '<li>$1</li>') // Replace "* item" with <li>item</li>
    .replace(/\n/g, '<br>'); // Add line breaks for better readability
};

export default Chat;
