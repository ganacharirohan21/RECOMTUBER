import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Homebg from './assests/home/homebg.jpg'
import Me from './assests/Team/me.jpeg'
import Footer from './components/footer/Footer';
import SearchBar from './components/searchbar/Searchbar';
import TopList from './components/top/toplist';

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

  //  const [isFocused, setIsFocused] = useState(false);
   const [query, setQuery] = useState('');

   const handleInputChange = (e) => {
    setQuery(e.target.value);
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     // do something with query
   };

   const [videos, setVideos] = useState([]);

   const handleSearch = async (query, sortBy) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&order=${sortBy}&key=YOUR_API_KEY`
    );
    const data = await response.json();
    const videoData = data.items.map((item) => ({
       id: item.id.videoId,
       title: item.snippet.title,
      views: Math.floor(Math.random() * 10000000), // Replace with actual view count data
    }));
     setVideos(videoData);
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
        <div>
          <SearchBar videos={videos} onSearch={handleSearch} />
        </div>
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
              <img src={ Me } alt="me" />
                <h4 className="team-member-name">Rohan Ganachari</h4>
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
