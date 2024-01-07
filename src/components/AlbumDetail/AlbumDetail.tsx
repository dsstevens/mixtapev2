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
}

const AlbumDetailPage = (props: AlbumDetailPageProps) => {
  const { allAlbums } = props;
  const [singleAlbum, setSingleAlbum] = useState<OneAlbum | {}>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const params = useParams()
  console.log("PARAMS", params.album_id)
  const id = parseInt(params.album_id as string);
  

  const handleHomeClick = () => {
    navigate("/");
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

console.log("SINGLE ALBUM", singleAlbum)

const tracks = (singleAlbum as OneAlbum).tracklist?.map((album, index) => (
  <div key={index} className='track'>
    <div className="track-info album-tracklist-font"> {/* Apply the class here */}
      <p>{index + 1}. {album.title}</p>
      <button className='add-button'>Add</button>
    </div>
  </div>
));


return (
  <section>
    <h2 className="album-title">{(singleAlbum as OneAlbum).title}</h2>
    <h3 className="artist-name">{(singleAlbum as OneAlbum).artists?.[0]?.name}</h3>
    <div className='album-container'>
      <div className='all-tracks'>{tracks}</div>
    </div>
  </section>
);
};


export default AlbumDetailPage;