import React, { useState } from 'react';
import data from '../searchbar/data.json';
import './toplist.css';

function TopList() {
  const [videos, setVideos] = useState(data);

  // Sort videos by views and get top 5
  const topVideos = videos.sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div className="video-list">
      <h2 className="video-list__title">Top Videos</h2>
      <ul className="video-list__items">
        {topVideos.map(video => (
          <li className="video-list__item" key={video.id}>
            <span className="video-list__item-title">{video.title}</span>
            <span className="video-list__item-views">{video.views} views</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopList;
