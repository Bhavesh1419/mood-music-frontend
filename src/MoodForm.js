import React, { useState } from "react";

function MoodForm() {
    const [mood, setMood] = useState("");
    const [songs, setSongs] = useState([]);

    const fetchSongs = async () => {
        const response = await fetch("http://localhost:8000/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mood }),
        });
        const data = await response.json();
        setSongs(data);
    };

    return (
        <div>
            <h1>Song Recommender</h1>
            <input
                type="text"
                placeholder="Enter your mood (happy, sad, energetic, calm)"
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
}

export default MoodForm;
