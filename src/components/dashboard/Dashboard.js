import React, { useEffect, useState } from 'react';
import { auth, onAuthStateChanged } from '../../components/utils/Firebase.js'; // Import the necessary Firebase functions
import '../../components/dashboard/dasboard.css'; // Import your dashboard styles

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        setUser({
          displayName: firebaseUser.displayName || 'Guest', // Make sure to handle if displayName is null
          email: firebaseUser.email,
        });
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Landing on the User Dashboard */}
      <div className="dashboard-background"></div>
      <div className="dashboard-wave-animation"></div>
      <div className="dashboard-content">
        {/* Personalized Welcome Banner */}
        <div className="user-welcome">
          <h2 className="welcome-heading">Welcome, {user?.displayName || 'User'}!</h2>
          <p className="welcome-subheading">"Embrace every challenge as an opportunity for growth."</p>
        </div>

        {/* Progress Overview */}
        <div className="progress-overview">
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
          <div className="milestones">
            <div className="milestone completed">Module 1</div>
            <div className="milestone completed">Module 2</div>
            <div className="milestone">Module 3</div>
          </div>
        </div>

        {/* Daily Challenge & Streaks */}
        <div className="daily-challenge">
          <div className="daily-challenge-card">
            <h3>Daily Challenge</h3>
            <p>Reflect on your recent achievements and set new goals for the day.</p>
          </div>
          <div className="streak-counter">
            <div className="streak-number">14</div>
          </div>
        </div>

        {/* Learning Modules Overview */}
        <div className="learning-modules">
          {/* Add learning module thumbnails */}
          <div className="module-thumbnail">
            <h3>Module 1</h3>
            <p>Introduction to Personal Growth</p>
            <div className="completion-percentage">80%</div>
            <button className="continue-button">Continue Learning</button>
          </div>
          <div className="module-thumbnail completed">
            <h3>Module 2</h3>
            <p>Building Resilience</p>
            <div className="completion-percentage">100%</div>
            <div className="completed-banner">Completed!</div>
          </div>
          <div className="module-thumbnail">
            <h3>Module 3</h3>
            <p>Effective Time Management</p>
            <div className="completion-percentage">45%</div>
            <button className="start-button">Start Module</button>
          </div>
        </div>

        {/* Recommendations & Personalization */}
        <div className="recommendations">
          {/* Add recommended content */}
          <div className="recommendation">
            <h3>For You</h3>
            <p>Suggested Podcast: "Achieve Your Goals" - Unlock your potential with inspiring stories.</p>
            <div className="why-this-icon">Why this?</div>
          </div>
        </div>

        {/* Achievements & Rewards */}
        <div className="achievements">
          {/* Add badges and rewards */}
          <div className="badge">
            <img src="badge1.png" alt="Badge 1" />
            <p>Completed Reading Assignments</p>
          </div>
          <div className="badge">
            <img src="badge2.png" alt="Badge 2" />
            <p>Podcast Enthusiast</p>
          </div>
        </div>

        {/* Community & Peer Interaction */}
        <div className="community-feed">
          {/* Add community feed */}
          <div className="feed-item">
            <p><strong>John Doe</strong> completed Module 2!</p>
            <button className="cheer-button">Cheer</button>
          </div>
        </div>

        {/* Settings & Personalization Gear */}
        <div className="settings-gear">
          {/* Add settings gear icon */}
          <img src="settings-icon.png" alt="Settings" />
        </div>

        {/* Feedback & Support */}
        <div className="feedback-support">
          {/* Add feedback icon */}
          <img src="feedback-icon.png" alt="Feedback" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
