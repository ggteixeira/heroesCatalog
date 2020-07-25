import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import { useParams } from 'react-router-dom'

// APIs keys
const timeStamp = '1595465427'
const apiKey = '4d83457e38505c349716636eea8d24d5' // public key
const md5 = '33ffba8f09b558e72e11ab67e2f80ba4'

function Catalog() {
  const [characterInfos, setCharacterInfos] = useState([])
  
  // console.log(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&orderBy=name&limit=100`)

  // make a request
  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&orderBy=name&limit=10`)
    .then(response => response.json())
    .then(data => data.data.results)
    .then(data => setCharacterInfos(data))
    
  }, [])
  return (
    <div className="flex mb-4">
      <ul className="bg-gray-400">
        {console.log(characterInfos)}
      {characterInfos.map(hero => (
        <li className="p-1">
          <h3>{hero.name}</h3>
          <img src={hero.thumbnail.path + '/portrait_medium.jpg'}></img>
          <p>Description: {hero.description}</p>
          <p>Comics available: {hero.comics.available}</p>

        </li>
      ))}
      </ul>
    </div>
  )
}

// className="flex justify-between flex-wrap"

export default Catalog

