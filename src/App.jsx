import { useState } from 'react';
import './App.css';
import Image from './components/Image';
import Stats from './components/Stats';
import Message from './components/Message';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const TOKEN = '8a20920a421590cd90460f57d05c2068';
  const BASE_URL = 'https://cors-proxy-superhero-api.onrender.com';

  const handleClick = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getByName/${name}`);
      console.log(response.data);
      if (response.data.results && response.data.results.length > 0) {
        setHeroData(response.data.results[0]);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  const getRandomHero = async () => {
    setError(false);
    setLoading(true);
    const ID = Math.ceil(Math.random() * 731);
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getById/${ID}`);
      console.log(response.data);
      setLoading(false);
      setHeroData(response.data);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input 
          placeholder="Enter hero name" 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <div className="form-btns-container">
          <button className="form-btn" type="submit">Find</button>
          <button className="form-btn" onClick={getRandomHero} type="button">Random</button>
        </div>
      </form>
      <Message loading={loading} error={error} />
      {(!loading && !error && heroData) && (
        <>
          <Image imageUrl={heroData.image.url} name={heroData.name} />
          <Stats stats={heroData.powerstats} />
        </>
      )}
    </div>
  );
}

export default App;
