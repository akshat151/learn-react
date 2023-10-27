import React, { useState } from 'react';

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  const [nextId, setNextId] = useState(0);

  const addArtist = () => {
    setArtists(prevArtists => [
      ...prevArtists,
      {
        id: nextId,
        name: name,
      }
    ]);
    setNextId(prevId => prevId + 1); 
    setName(''); // Clear the input field.
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={addArtist}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
