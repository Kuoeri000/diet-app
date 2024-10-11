import React from 'react';
import "../Styling/VisitorPage.css";

function VisitorPage() {
  // Function to handle the sign-up button click
  const handleSignUp = () => {
    alert('Redirecting to Sign Up page...');
    // Here you can add the logic to redirect to the sign-up page
    // For example: window.location.href = '/signup';
  };

  return (
    <div className="container">
      <h1>Welcome to the Diet App</h1>
      <p>Your journey to a healthier life starts here.</p>
      <button className="button" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
}

export default VisitorPage;