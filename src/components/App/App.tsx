import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import AlbumsByYear from '../AlbumsByYear/AlbumsByYear';
import AlbumDetail from '../AlbumDetail/AlbumDetail';
import HomeButton from '../HomeButton/HomeButton';
import { getCollection } from "../../apiCalls";

type AppProps = JSX.IntrinsicElements['main'];

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

interface Release {
  basic_information: BasicInformation;
}

export interface TrackType {
  position: string; // or number, if position is a number
  title: string;
  artist: string;
}

const App: React.FC<AppProps> = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [playlist, setPlaylist] = useState<TrackType[]>([]);
  const [albums, setAlbums] = useState<BasicInformation[]>([]);

  const addToPlaylist = (track: TrackType) => {
    if (!playlist.some(t => t.position === track.position)) {
      setPlaylist(prevPlaylist => {
        const updatedPlaylist = [...prevPlaylist, track];
        console.log("Updated Playlist:", updatedPlaylist); // Log the updated playlist
        return updatedPlaylist;
      });
    } else {
      console.log(`This track is already in your playlist.`);
    }
  };

  const fetchAlbums = async () => {
      try {
        let allAlbums: BasicInformation[] = [];
        let page = 1;
        const perPage = 50;
        let totalPages = 1;

        while (page <= totalPages) {
          const response = await getCollection(page, perPage);
          const newAlbums: BasicInformation[] = response.releases.map(
            (release: Release) => release.basic_information
          );
          allAlbums = allAlbums.concat(newAlbums);

          if (page === 1) {
            totalPages = response.pagination.pages;
          }
          page++;
        }

        setAlbums(allAlbums);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <main className="App">
      <Header isHomePage={isHomePage}>
        {isHomePage ? null : <HomeButton />}
      </Header>
      <Routes>
      <Route path="/" element={<Home playlist={playlist} />} />
        <Route path="/:year" element={<AlbumsByYear allAlbums={albums} />} />
        <Route path="/:year/:album_id" element={<AlbumDetail allAlbums={albums} playlist={playlist} addToPlaylist={addToPlaylist} />}/>
      </Routes>
    </main>
  );
};

export default App;
