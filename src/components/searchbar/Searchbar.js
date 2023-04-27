import "./Searchbar.css";
import React, { useState } from "react";
import data from "./data.json";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      setSearchResults([]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const filteredVideos = data.videos.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      const sortedVideos = filteredVideos.sort((a, b) => b.views - a.views);
  
      setSearchResults(sortedVideos);
    };
  
    return (
      <div className="SearchBar">
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="Search titles"
            value={searchTerm}
            onChange={handleChange}            
          />
          {/* <button type="submit">Search</button> */}
        </form>
        {searchResults.length > 0 && (
          <div className="VideoList">
            <div className="card">
              <div className="card-body">
            <p>{searchResults.length} videos found</p>
            
            <ul>
              
                {searchResults.map((video) => (
                <li key={video.id}>
                  <img src={video.thumbnail} alt={video.title} />
                  <h3>{video.title}</h3>
                  <p>{video.views} views</p>
                  </li>
                ))}
                
            </ul>
            </div>
          </div>
          </div>
        )}
      </div>
    );
  }
export default SearchBar;
