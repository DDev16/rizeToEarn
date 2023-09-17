import React from 'react';
import '../../components/communityFeedback/feedback.css'; // Import the CSS file

const FeedbackCommunity = () => {
  return (
    <div className="feedback-community">
      <h2 className="feedback-community-heading">Feedback & Community</h2>
      <p className="feedback-community-description">
        Welcome to our community feedback hub! We value your input and engagement, which helps us improve and grow together. Here, you can participate in meaningful discussions, join AMAs (Ask Me Anything), and have a voice in shaping our future.
      </p>
      <div className="feedback-options">
        <div className="feedback-option">
          <h3 className="feedback-option-heading">Community Discussions</h3>
          <p className="feedback-option-description">
            Engage with fellow community members in discussions on various topics. Share your ideas, ask questions, and contribute to the conversation.
          </p>
        </div>
        <div className="feedback-option">
          <h3 className="feedback-option-heading">Ask Me Anything (AMA)</h3>
          <p className="feedback-option-description">
            Participate in live AMAs with experts, leaders, and influencers. Get direct answers to your questions and gain insights from the best in the industry.
          </p>
        </div>
        <div className="feedback-option">
          <h3 className="feedback-option-heading">Feedback & Reporting</h3>
          <p className="feedback-option-description">
            Help us improve by providing feedback through our dedicated forms and reporting systems. Your feedback is crucial in making our community better.
          </p>
        </div>
        <div className="feedback-option">
          <h3 className="feedback-option-heading">Community Voting</h3>
          <p className="feedback-option-description">
            Vote on important community decisions and initiatives. Your vote counts, and it's a way to collectively shape the direction of our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCommunity;
