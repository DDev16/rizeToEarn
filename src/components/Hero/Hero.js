import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../../components/Hero/Hero.css'; // Import your CSS file for styling (if needed)
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Define headline animation using React Spring
  const headlineAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config.default,
    delay: 500,
  });

  // Define subheadline animation using React Spring
  const subheadlineAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.default,
    delay: 800,
  });

  // Define CTA button animation using React Spring
  const ctaButtonAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.stiff,
    delay: 1000,
  });

  return (
    <div className="hero-section">
      {/* Add the iframe for the background */}
          <iframe src='https://my.spline.design/boysittingpersonhumancopy-3a9ce87b90bde5f3eb2a1512cec000e5/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          style={{ position: 'absolute', top: 0, left: 0 }}

            title='spline'>
          </iframe>



      {/* Content in front of the background */}
      <div className="content-container">
        <animated.h1 className="headline" style={headlineAnimation}>
          Unlock Your Potential
        </animated.h1>
        <animated.h2 className="subheadline" style={subheadlineAnimation}>
          Listen. Learn. Earn. Evolve.
        </animated.h2>
        <animated.div style={ctaButtonAnimation}>
  <Link to="/registration" className="cta-button">
    Start Your Journey
  </Link>
</animated.div>
      </div>
    </div>
  );
};

export default HeroSection;
