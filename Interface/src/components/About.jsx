import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Meal Master</h1>
        <p>Your Personalized Recipe Guide Powered by AI</p>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>Meal Master</strong>, a smart recipe platform where discovering delicious meals is as easy as entering your ingredients! Our platform offers an intuitive experience for users to find meals based on ingredients they have on hand. With AI assistance, we validate your ingredients and help you find recipes that match.
        </p>
        <p>
          Key Features of Meal Master include:
        </p>
        <ul>
          <li><strong>Home Page:</strong> Search for recipes based on the ingredients you have. Our AI will validate your ingredients and let you know if a recipe is possible. Recipes from our database that match your ingredients will be displayed, each with detailed instructions. You can also like recipes to review them later.</li>
          <li><strong>AI Chat:</strong> Enter your ingredients and get personalized recipe recommendations without needing any extra items.</li>
        </ul>
        <p>
          Join us on this culinary journey, where your ingredients are the starting point for endless meal possibilities!
        </p>
      </div>
      <div className="about-footer">
        <h2>Where Every Meal Begins with What You Have</h2>
      </div>
    </div>
  );
};

export default About;
