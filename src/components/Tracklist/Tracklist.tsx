import './Tracklist.css';
import React from "react";
import { TrackType } from '../App/App';

const Tracklist = ({ playlist }: { playlist: TrackType[] }) => {
  return (
    <div className='internal-tracklist-container'>
      <h2 className='tracklist-title'>My Playlist</h2>
      <ul className='tracklist'>
        {playlist.map((track, index) => (
          <li key={index} className='track'>
            {track.title} by {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracklist;