import React, { useState, useEffect } from 'react';
import './home.css'; // Import the CSS file
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'; // Import Parallax components
import { FaCheckCircle } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

// Import your background image
import techBg from '../../components/assets/tech-bg.webp'; // Make sure the path is correct

function Home() {
  const [user1Image, setUser1Image] = useState('');
  const [user2Image, setUser2Image] = useState('');

  // Track initial touch positions
  const [initialTouchPositions, setInitialTouchPositions] = useState({});

  // Handle touch start to capture initial touch positions
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const [touch1, touch2] = e.touches;
      setInitialTouchPositions({
        touch1: { x: touch1.clientX, y: touch1.clientY },
        touch2: { x: touch2.clientX, y: touch2.clientY },
      });
    }
  };

  // Handle touch move to calculate and simulate spline movement
  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const [touch1, touch2] = e.touches;

      // Calculate distance moved by each touch
      const deltaX1 = touch1.clientX - initialTouchPositions.touch1.x;
      const deltaY1 = touch1.clientY - initialTouchPositions.touch1.y;
      const deltaX2 = touch2.clientX - initialTouchPositions.touch2.x;
      const deltaY2 = touch2.clientY - initialTouchPositions.touch2.y;

      // Calculate the distance between the two touches
      const distance = Math.hypot(deltaX1, deltaY1, deltaX2, deltaY2);

      // Simulate spline movement based on the distance
      const splineMovement = distance * 0.1; // Adjust the multiplier as needed

      // Apply the simulated spline movement
      // Here, we're just logging the movement, but you can update your spline or perform other actions
      console.log('Spline Movement:', splineMovement);
    }
  };

  const handleTouchEnd = () => {
    setInitialTouchPositions({});
  };

  // Fetch Unsplash images for testimonials
  useEffect(() => {
    fetch('https://source.unsplash.com/featured/?technology')
      .then((response) => {
        setUser1Image(response.url);
      })
      .catch((error) => {
        console.error('Error fetching user1 image:', error);
      });

    fetch('https://source.unsplash.com/featured/?technology')
      .then((response) => {
        setUser2Image(response.url);
      })
      .catch((error) => {
        console.error('Error fetching user2 image:', error);
      });
  }, []);

  // Define a style object to apply the background image to the container
  const containerStyle = {
    backgroundImage: `url(${techBg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="home-container" style={containerStyle}>
      {/* First parallax section */}
      
        <div className="parallax-section parallax-image-1">
          <div className="parallax-content">
            <h1>Welcome to Rize to Earn</h1>
            <p className="parallax-subtitle">Empowering Education</p>
          </div>
          <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/Vmu1n3CM401N0U-E/scene.splinecode"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
        </div>
      

      {/* About Rize to Earn */}
      <div className="content-section">
        <h2>About Rize to Earn</h2>
        <p>
          Rize to Earn is a revolutionary platform that empowers users to learn
          and earn blockchain-based tokens called Rize Coins. Our mission is to
          make learning not only enriching but also rewarding.
        </p>
      </div>

      {/* Second parallax section */}
      <Parallax y={[-20, 20]} tagouter="figure">
        <div className="parallax-section parallax-image-2">
          <div className="parallax-content">
            <h2>How It Works</h2>
            <p className="parallax-subtitle">Seamless Learning Experience</p>
          </div>
        </div>
      </Parallax>

      {/* How It Works content */}
      <div className="content-section">
        <h3>Unlock the Power of Knowledge</h3>
        <div className="hiw-steps">
          <div className="hiw-step">
            <FaCheckCircle className="hiw-icon" />
            <p>Access a wide range of educational content.</p>
          </div>
          <div className="hiw-step">
            <FaCheckCircle className="hiw-icon" />
            <p>Earn Rize Coins as you complete courses and quizzes.</p>
          </div>
          <div className="hiw-step">
            <FaCheckCircle className="hiw-icon" />
            <p>Exchange Rize Coins for real-world rewards or cryptocurrency.</p>
          </div>
        </div>
      </div>

      {/* New Feature Section */}
      <div className="content-section feature-section">
        <h2>New Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Advanced Courses</h3>
            <p>Explore high-level courses to enhance your skills.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Quizzes</h3>
            <p>Engage with quizzes to reinforce your learning.</p>
          </div>
          <div className="feature-card">
            <h3>Real-time Progress Tracking</h3>
            <p>Monitor your progress and set achievable goals.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="content-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <img
            src={user1Image} // Use the dynamically fetched image URL for User 1
            alt="User 1"
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Rize to Earn has transformed my learning experience. I've gained
            valuable knowledge and earned cryptocurrency rewards."
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>
        <div className="testimonial">
          <img
            src={user2Image} // Use the dynamically fetched image URL for User 2
            alt="User 2"
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "The platform's flexibility and rewards system are a game-changer
            for lifelong learners like me."
          </p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>
      </div>

      {/* Join us CTA */}
      <div className="content-section">
        <p className="final-cta">
          Join us on this exciting journey of learning and earning in the world
          of cryptocurrency. Get started today and unlock the potential of Rize
          Coins!
        </p>
      </div>
    </div>
  );
}

export default function HomeWithParallax() {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  );
}
