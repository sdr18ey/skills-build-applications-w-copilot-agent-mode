import React, { useEffect, useState } from 'react';

const LEADERBOARD_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;


function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    console.log('Fetching Leaderboard from:', LEADERBOARD_API);
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Fetched Leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="heading">Leaderboard</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={entry.id || idx}>
                <td>{entry.id || idx + 1}</td>
                <td>{entry.username || '-'}</td>
                <td>{entry.score || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
}

export default Leaderboard;
