import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Homebg from './assests/home/homebg.jpg'
import Me from './assests/Team/me.jpeg'
import Footer from './components/footer/Footer';


function App() {
  const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > 10) {
        setShowAnimation(true);
      } else {
        setShowAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with query
  };


  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="homeland" id="home">
          <img 
          src= {Homebg }
          alt="homebg"></img>
          <div className='imgtext'>
            <h1 className="slide-in">WELCOME</h1>
            <h2 className="slide-in">TO</h2>
            <h3 className="slide-in">RECOMMTUBER!</h3>
            <h4 classNmae="slide-up">A place where we can </h4>
            <h5 classNmae="slide-up">help you go on top of that</h5>
            <h6 classNmae="slide-up"> youtube search list!</h6>
          </div>
          <div className='home1'>
            <div className={showAnimation ? "homecard" : ""}>
              <h1>Why use Recommtuber?</h1>
              <p>Recommtuber helps you fetch more likes to your youtube videos by gathering the data from youtube and helping you see the most liked videos for the title you are looking for.</p>
              <a href="#recommendations">
              <button>Try Now!</button>
              </a>
            </div>
          </div>    
        </div>
      </div>
      <div className='Recommendations' id="recommendations">
        <h1>Enter the domain of your video.</h1>
        <form onSubmit={handleSubmit} className="search-bar-container">
          <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button type="submit">
              <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25a1 1 0 1 0 1.42-1.42L15.5 14zm-6 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="about-us" id='about'>
          <div className="container">
            <h2 className="title">About Us</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus vestibulum augue, at sagittis nunc aliquam ac. Etiam euismod nisi et ultrices dignissim. Mauris vel sapien ante. Nam tincidunt leo at mauris consequat, id commodo metus vehicula. Fusce eget neque vitae ex fermentum tristique ac eu augue. Fusce auctor maximus mi, vitae iaculis sapien ullamcorper ac. Nullam porttitor rutrum justo, vitae bibendum massa eleifend sit amet. Integer sagittis gravida nulla non dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          <div className="team">
            <h3 className="team-title">Our Team</h3>
            <div className="team-members">
              <div className="team-member">
                <img src={ Me } alt="me" />
                <h4 className="team-member-name">Rohan Ganachari</h4>
                <p className="team-member-title">Web Developer</p>
              </div>
              <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="Team Member" />
                <h4 className="team-member-name">Sathvika Reddy</h4>
                <p className="team-member-title">Machine Learning Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
