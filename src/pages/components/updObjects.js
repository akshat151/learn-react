import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
                                name: 'Niki de Saint Phalle',
                                artwork: {
                                  title: 'Blue Nana',
                                  city: 'Hamburg',
                                  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
                                }
                              });

  function handleCityChange(e) {
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
