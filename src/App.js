import React, { useState } from "react";
import MoodForm from "./MoodForm";

const App = () => {
  const [songs, setSongs] = useState([]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎵 AI-Powered Mood-Based Song Recommender</h1>
      <MoodForm setSongs={setSongs} />

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {songs.map((song, index) => (
          <li key={index} style={{ margin: "10px 0" }}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
