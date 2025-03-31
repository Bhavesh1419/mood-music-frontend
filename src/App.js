import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [mood, setMood] = useState("");
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`https://mood-music-4ba5.onrender.com/recommend?mood=${mood}`);
      setSongs(response.data.songs);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <div>
      <h1>Mood-Based Song Recommender</h1>
      <input 
        type="text" 
        placeholder="Enter your mood..." 
        value={mood} 
        onChange={(e) => setMood(e.target.value)} 
      />
      <button onClick={fetchSongs}>Get Songs</button>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
