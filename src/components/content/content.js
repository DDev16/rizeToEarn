import React, { useState } from 'react';
import './Content.css'; // Import your CSS file for styling

const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [savedContent, setSavedContent] = useState([]);

  // Mock data for podcasts and modules
  const mockPodcasts = [
    {
      id: 1,
      title: 'Podcast 1',
      logo: 'https://source.unsplash.com/featured/?podcast',
      duration: '45 mins',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Podcast 2',
      logo: 'https://source.unsplash.com/featured/?podcast',
      duration: '30 mins',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Podcast 3',
      logo: 'https://source.unsplash.com/featured/?podcast',
      duration: '1 hour',
      description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
    },
    {
      id: 4,
      title: 'Podcast 4',
      logo: 'https://source.unsplash.com/featured/?podcast',
      duration: '40 mins',
      description: 'Cras mattis consectetur purus sit amet fermentum.',
    },
    // Add more mock podcast data here
  ];

  const mockModules = [
    {
      id: 1,
      title: 'Module 1',
      image: 'https://source.unsplash.com/featured/?module',
      completionTime: '2 hours',
    },
    {
      id: 2,
      title: 'Module 2',
      image: 'https://source.unsplash.com/featured/?module',
      completionTime: '1.5 hours',
    },
    {
      id: 3,
      title: 'Module 3',
      image: 'https://source.unsplash.com/featured/?module',
      completionTime: '3 hours',
    },
    {
      id: 4,
      title: 'Module 4',
      image: 'https://source.unsplash.com/featured/?module',
      completionTime: '2.5 hours',
    },
    // Add more mock module data here
  ];

  const handleBookmark = (content) => {
    setSavedContent([...savedContent, content]);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Implement logic to filter podcasts and modules by selected category
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    // Implement logic to filter podcasts and modules by selected filter
  };

  const playChime = () => {
    // Implement logic to play a soft tone chime
  };

  return (
    <div className="content-container">
      <div className="top-banner">
        <h1>Discover & Dive Deep</h1>
      </div>

      <div className="podcast-section">
        
          {mockPodcasts.map((podcast) => (
            <div className="podcast-card" key={podcast.id}>
              <img src={podcast.logo} alt={podcast.title} />
              <h3>{podcast.title}</h3>
              <p>{podcast.duration}</p>
              <p>{podcast.description}</p>
              <button onClick={() => handleBookmark(podcast)}>Bookmark</button>
              {/* Add hover animation */}
              <div className="hover-animation" onMouseEnter={playChime}>
                {/* Content to be shown on hover */}
              </div>
            </div>
          ))}
        </div>

        <div className="featured-podcast">
          <div className="featured-podcast-spotlight">
            {/* Content for the featured podcast */}
          </div>
       
      </div>

      <div className="filtering-section">
        <div className="category-tabs">
          {/* Display category tabs */}
        </div>

        <div className="filter-dropdown">
          {/* Display filter options */}
        </div>
      </div>

      <div className="learning-modules">
        <div className="module-thumbnails">
          {mockModules.map((module) => (
            <div className="module-card" key={module.id}>
              <img src={module.image} alt={module.title} />
              <h3>{module.title}</h3>
              <p>{module.completionTime}</p>
              {/* Add hover animation and preview button */}
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-section">
        {/* Display user reviews */}
      </div>

      <div className="recommendations-section">
        {/* Display personalized recommendations */}
      </div>

      <div className="action-button">
        <button>Start Learning/Listening</button>
      </div>
    </div>
  );
};

export default Content;
