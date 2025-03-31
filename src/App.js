import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [mood, setMood] = useState("");
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  const fetchSongs = async () => {
    if (!mood.trim()) {
      setError("Please enter a mood!");
      return;
    }

    try {
      const response = await axios.get("https://mood-music-4ba5.onrender.com/recommend", {
        params: { mood: mood.trim() },
      });

      setSongs(response.data.songs);
      setError("");  // Clear errors on success
    } catch (error) {
      console.error("Error fetching songs:", error);
      setError("Failed to fetch songs. Try again later.");
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

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
