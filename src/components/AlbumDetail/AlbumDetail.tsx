import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleAlbum } from "../../apiCalls";
import "./AlbumDetail.css";

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

interface AlbumDetailPageProps {
  clickedTracks: Record<number, boolean>;
  singleAlbum: OneAlbum | {};
  setSingleAlbum: (data: any) => void;
  handleClick: (trackIndex: number, trackName: string) => void;
}

const AlbumDetailPage = (props: AlbumDetailPageProps) => {
  const { clickedTracks, singleAlbum, setSingleAlbum, handleClick } = props;
  const [error, setError] = useState<string>("");
  const params = useParams();
  const id = parseInt(params.album_id as string);

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

  const tracks = (singleAlbum as OneAlbum).tracklist?.map((track, index) => (
    <div className="tracks" key={track.title}>
      <p>Song: {track.title}</p>
      <p>Duration: {track.duration}</p>
      {clickedTracks[index] && <span className="add-button"> Added ✅</span>}
      {!clickedTracks[index] && (
        <button
          onClick={() => handleClick(index, track.title)}
          className="add-button"
        >
          Add
        </button>
      )}
    </div>
  ));

  return (
    <section>
      <h2 className="album-title">
        Album Title: {(singleAlbum as OneAlbum).title}
      </h2>
      <h3 className="artist-name">
        Artist: {(singleAlbum as OneAlbum).artists?.[0]?.name}
      </h3>
      <div className="album-container">
        <div className="all-tracks">{tracks}</div>
      </div>
    </section>
  );
};

export default AlbumDetailPage;
