import React, { useState } from "react";
import "../../components/registration/style.css";
import rizeLogo from "../../components/assets/rize-logo.png";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../../components/utils/Firebase"; // Import the Firebase authentication methods

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="registration">
      
        <div className="overlap-group">
          
          
          
            
            
         
          <img src={rizeLogo} alt="Rize Logo" className="rize-logo" />
      
      </div>
      <div className="overlap">
        <div className="text-wrapper-2">Login or Register</div>
        <div className="text-wrapper-3">Username:</div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="email-input"
        />
        <div className="text-wrapper-5">Password:</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="password-input"
        />
        <div className="error-message">{error}</div>
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <div className="don-t-have-an">Don't have an account?</div>
        <button onClick={handleRegister} className="register-button">
          Register now
        </button>
      </div>
    </div>
  );
};

export default Registration;
