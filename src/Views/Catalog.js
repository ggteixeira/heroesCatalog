import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const timeStamp = '1595465427'
const apiKey = '4d83457e38505c349716636eea8d24d5'
const md5 = '33ffba8f09b558e72e11ab67e2f80ba4'

function Catalog() {
  const [characterInfos, setCharacterInfos] = useState([])
  const [characterId, setCharacterId] = useState([])

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&orderBy=name&limit=10`)
      .then(response => response.json())
      .then(data => data.data.results)
      .then(data => setCharacterInfos(data))

  }, [characterInfos])

  return (
    <div className="w-full flex flex-wrap space-x-2 justify-start">
      {characterInfos.map(hero => (
        <div className="bg-gray-500 max-w-sm m-3 rounded overflow-hidden shadow-lg">
          <img className="h-48 w-full" src={hero.thumbnail.path + '/standard_xlarge.jpg'} alt="Thumb not available"></img>
          <div class="font-bold text-sm m-2">
            <p className="text-center">{hero.name}</p>
          </div>
          <p className="hover:bg-gray-600 border text-center border-gray-400 px-4 py-2 text-gray-800"><Link to="/details">Click for more details</Link></p>
        </div>

      ))}
    </div>
  )
}

export default Catalog

