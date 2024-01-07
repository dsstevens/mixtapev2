import './Home.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tracklist from '../Tracklist/Tracklist';
import Dropdown from '../Dropdown/Dropdown';
import { getCollection } from '../../apiCalls';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [collection, setCollection] = useState<{}[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleYear = (year: number) => {
    navigate(`/${year}`);
    setOpen(false);
  }

  useEffect(() => {
    getCollection()
      .then(data => {
        // leaving this console.log in temporarily so we can see the data in the console that we have to work with while we set everything up
        console.log(data);
        setCollection([...collection, ...data]);
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="Home">
      <Dropdown
        open={open}
        trigger={<button className='years-dropdown-button' onClick={handleOpen}>Choose your favorite year from the 80's!</button>}
        menu={[1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989].map((year) => (
          <button key={year} onClick={() => handleYear(year)}>{year}</button>
        ))}
      />

      <div className='tracklist-container'>
        <Tracklist />
        <p className='image-credits'>Image by janoon028 on Freepik</p>
      </div>
    </div>
  );
};

export default Home;
