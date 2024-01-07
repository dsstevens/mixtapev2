import './AlbumsByYear.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

interface AlbumsByYearProps {
  allAlbums: BasicInformation[];
}

const AlbumsByYear = (props: AlbumsByYearProps) => {
  const { allAlbums } = props
  const { year } = useParams<string>();

        const yearNum = parseInt(year as string, 10);
        const filteredAlbums = allAlbums.filter(album => album.year === yearNum)

  return (
    <div className="albums-by-year-container">
      <h2 className="year-title">Albums from the Year {year}</h2>
      <div className="album-grid">
        {filteredAlbums.map((album, index) => (
          <Link
            to={`/${year}/${album.id}`}
            key={index}
            className="album-link"
          >
            <div className="album">
              <p className="album-title">{`${album.artists
                .map((artist) => artist.name)
                .join(", ")} - ${album.title}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlbumsByYear;
