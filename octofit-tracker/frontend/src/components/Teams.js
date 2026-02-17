import React, { useEffect, useState } from 'react';

const TEAMS_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log('Fetching Teams from:', TEAMS_API);
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched Teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="heading">Teams</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.id || idx + 1}</td>
                <td>{team.name || '-'}</td>
                <td>{Array.isArray(team.members) ? team.members.length : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary">Create Team</button>
      </div>
    </div>
  );
}

export default Teams;
