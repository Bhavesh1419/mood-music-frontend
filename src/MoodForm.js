import React, { useState } from "react";
import axios from "axios";

const MoodForm = ({ setSongs }) => {
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSongs = async () => {
    setError("");
    setSongs([]);
    setLoading(true);

    if (!mood.trim()) {
      setError("Please enter a mood.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("https://mood-music-4ba5.onrender.com/recommend", {
        params: { mood: mood.trim() },
      });

      if (response.data.songs.length > 0) {
        setSongs(response.data.songs);
      } else {
        setError("No recommendations found.");
      }
    } catch (error) {
      setError("Error fetching songs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button
        onClick={fetchSongs}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Loading..." : "Get Songs"}
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default MoodForm;
