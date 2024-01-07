import './Tracklist.css';
import React from "react";

const Tracklist = () => {
  return (
    <div className='internal-tracklist-container'>
      <h2 className='tracklist-title'>My Playlist</h2>
      <ul className='tracklist'>
        {/* placeholder tracks */}
        <li className='track'>Track 1</li>
        <li className='track'>Track 2</li>
        <li className='track'>Track 3</li>
        <li className='track'>Track 4</li>
        <li className='track'>Track 5</li>
        <li className='track'>Track 6</li>
        <li className='track'>Track 7</li>
      </ul>
    </div>
  );
};

export default Tracklist;