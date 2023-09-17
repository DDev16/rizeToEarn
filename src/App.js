// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Registration from './components/registration/Registration.js';
import Dashboard from './components/dashboard/Dashboard';
import Content from './components/content/content.js';
import Staking from './components/staking/staking.js';
import Redeeming from './components/redemption/Redemption.js';
import FeedbackCommunity from './components/communityFeedback/feedback.js';
import Nav from "./components/nav/nav.js";
import { UserProvider } from './components/utils/userContext.js';
import HeroSection from './components/Hero/Hero.js'; // Import UserProvider
function App() {
   

  return (
    <UserProvider> 
      <Router>
        <div className="App">
          <Nav />
          
          <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/content" element={<Content />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/redeeming" element={<Redeeming />} />
            <Route path="/" element={<HeroSection />} />

            <Route path="/feedback-community" element={<FeedbackCommunity />} />
          </Routes>
         
        </div>
      </Router>

    </UserProvider>
  );
}

export default App;
