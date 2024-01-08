import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleAlbum } from "../../apiCalls";
import './AlbumDetail.css'

interface OneAlbum {
  tracklist: {
    position: string;
    type_: string;
    title: string;
    duration: string;
  }[];
  title: string;
  artists: {
    name: string;
  }[];
}

interface Artist {
  name: string;
}

interface BasicInformation {
  title: string;
  year: number;
  cover_image: string;
  id: string;
  master_id: string;
  artists: Artist[];
}

interface AlbumDetailPageProps {
  allAlbums: BasicInformation[];
  playlist: TrackType[];
  addToPlaylist: (track: TrackType) => void;
}

interface AlbumTrack {
  position: string;
  type_: string;
  title: string;
  duration: string;
}

interface TrackType {
  position: string; // Assuming `position` is a string. Change if needed.
  title: string;
  artist: string;
  addedToPlaylist?: boolean;
}

const AlbumDetailPage = ({ allAlbums, playlist, addToPlaylist }: AlbumDetailPageProps) => {
  const [singleAlbum, setSingleAlbum] = useState<OneAlbum | {}>({});
  const [trackAdded, setTrackAdded] = useState<{ [key: string]: boolean }>({});
  const [addedTrackPositions, setAddedTrackPositions] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const params = useParams()
  const id = parseInt(params.album_id as string);
  

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAddToPlaylist = (albumTrack: AlbumTrack) => {
    const trackToAdd: TrackType = {
      position: albumTrack.position,
      title: albumTrack.title,
      artist: (singleAlbum as OneAlbum).artists[0].name,
    };
  
    console.log("Adding track to playlist:", trackToAdd); // Log the track being added
    addToPlaylist(trackToAdd);
    setAddedTrackPositions(prev => ({ ...prev, [albumTrack.position]: true }));
    setTimeout(() => setAddedTrackPositions(prev => ({ ...prev, [albumTrack.position]: false })), 1500);
    console.log(">>>>>>>>>>", trackAdded)
  };
  

  useEffect(() => {
    const fetchSingleAlbum = async () => {
      try {
        const data = await getSingleAlbum(id);
        setSingleAlbum(data);
      } catch (err) {
        setError("An error occurred while fetching the album details");
      }
    };
  
    if (id) {
      fetchSingleAlbum();
    }
  }, [id]); 


return (
  <section>
    <h2 className="album-title">{(singleAlbum as OneAlbum).title}</h2>
    <h3 className="artist-name">{(singleAlbum as OneAlbum).artists?.[0]?.name}</h3>
    <div className='album-container'>
      <div className='all-tracks'>
      {(singleAlbum as OneAlbum).tracklist?.map((track: AlbumTrack, index: number) => (
          <div key={index} className='track'>
            <div className="track-info album-tracklist-font">
              <p>{index + 1}. {track.title}</p>
              <button className='add-button' onClick={() => handleAddToPlaylist(track)}>Add</button>
              {addedTrackPositions[track.position] && <span className="checkmark">✅</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};


export default AlbumDetailPage;