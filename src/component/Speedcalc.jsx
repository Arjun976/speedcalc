import React, { useState } from 'react'

function Speedcalc() {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

  const tim = Number(time);
  const dis = Number(distance);

  setSpeed(tim ? dis / tim : 0);

  };

  return (
    <div>
        <h1>Speed Calculator</h1>
        <form onSubmit={handleSubmit}>
            <label>Distance (km):</label>
            <input
              type="number"
              name="distance"
              value={distance}
              onChange={e => setDistance(e.target.value)}
            />
            <br />
            <label>Time (hours):</label>
            <input
              type="number"
              name="time"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
            <br />
            <label>Speed (km/h):</label>
            <input
              type="number"
              name="speed"
              value={speed}
              readOnly
            />
            <br />
            <button type="submit">Calculate Speed</button>
        </form>
    </div>
  )
}

export default Speedcalc


